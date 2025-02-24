/*
 * GNU AGPL-3.0 License
 *
 * Modified Work Copyright (c) 2021 - present core.ai . All rights reserved.
 * Original work Copyright (c) 2016 - 2021 Adobe Systems Incorporated. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License
 * for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://opensource.org/licenses/AGPL-3.0.
 *
 */

/**
 * Fold range finder for handlebars/mustache template type files.
 * @author Patrick Oladimeji
 * @date 14/08/2016 22:04:21
 */

define(function (require, exports, module) {

    var CodeMirror  = brackets.getModule("thirdparty/CodeMirror/lib/codemirror"),
        _           = brackets.getModule("thirdparty/lodash"),
        StringUtils = brackets.getModule("utils/StringUtils");

    /**
     * Utility function for scanning the text in a document until a certain condition is met
     * @param {object}  cm  The code mirror object representing the document
     * @param {string}  startCh  The start character position for the scan operation
     * @param {number}  startLine The start line position for the scan operation
     * @param {function (string): boolean} condition A predicate function that takes in the text seen so far and returns true if the scanning process should be halted
     * @returns {{from:CodeMirror.Pos, to: CodeMirror.Pos, string: string}} An object representing the range of text scanned.
     */
    function scanTextUntil(cm, startCh, startLine, condition) {
        var line = cm.getLine(startLine),
            seen = "",
            characterIndex = startCh,
            currentLine = startLine,
            range;
        while (currentLine <= cm.lastLine()) {
            if (line.length === 0) {
                characterIndex = 0;
                line = cm.getLine(++currentLine);
            } else {
                seen = seen.concat(line[characterIndex] || "");
                if (condition(seen)) {
                    range = {
                        from: {ch: startCh, line: startLine},
                        to: {ch: characterIndex, line: currentLine},
                        string: seen
                    };
                    return range;
                } else if (characterIndex >= line.length) {
                    seen = seen.concat(cm.lineSeparator());
                    if (condition(seen)) {
                        range = {
                            from: {ch: startCh, line: startLine},
                            to: {ch: characterIndex, line: currentLine},
                            string: seen
                        };
                        return range;
                    }
                    characterIndex = 0;
                    line = cm.getLine(++currentLine);
                } else {
                    ++characterIndex;
                }
            }
        }
    }

    /**
     * Utility function used to detect the end of a helper name when scanning a series of text.
     * The end of a helper name is signalled by a space character or the `}`
     * @param   {string}  seen The string seen so far
     * @returns {boolean} True when the end of a helper name has been detected.
     */
    function endHelperName(seen) {
        return (/\s$/).test(seen) || StringUtils.endsWith(seen, "}");
    }

    /**
     * Returns a predicate function that returns true when a specific character is found
     * @param   {string}   character the character to use in the match function
     * @returns {function} A function that checks if the last character of the parameter string matches the parameter character
     */
    function readUntil(character) {
        return function (seen) {
            return seen[seen.length - 1] === character;
        };
    }

    function getRange(cm, start) {
        var currentLine = start.line,
            text = cm.getLine(currentLine) || "",
            i = 0,
            tagStack = [],
            braceStack = [],
            found,
            openTag,
            openPos,
            currentCharacter,
            openTagIndex = text.indexOf("{{"),
            range;

        if (openTagIndex < 0 || text[openTagIndex + 2] === "/") {
            return;
        }

        found = scanTextUntil(cm, openTagIndex + 2, currentLine, endHelperName);
        if (!found) {
            return;
        }

        openPos = {
            from: {line: currentLine, ch: openTagIndex},
            to: found.to
        };
        openTag = found.string.substring(0, found.string.length - 1);
        if (openTag[0] === "#" || openTag[0] === "~" || openTag[0] === "^") {
            found = scanTextUntil(cm, openPos.to.ch, openPos.to.line, function (seen) {
                return seen.length > 1 && seen.substr(-2) === "}}";
            });
            if (found) {
                openPos.to = {line: found.to.line, ch: found.to.ch + 1};
            }
            tagStack.push(openTag.substr(1));
        } else {
            braceStack.push("{{");
        }

        i = found.to.ch;
        currentLine = found.to.line;

        while (currentLine <= cm.lastLine()) {
            text = cm.getLine(currentLine);
            currentCharacter = (text && text[i]) || "";
            switch (currentCharacter) {
            case "{":
                if (text[i + 1] === "{") {
                    found = scanTextUntil(cm, i + 2, currentLine, endHelperName);
                    if (found) {
                        var tag = found.string.substring(0, found.string.length - 1);
                        if (tag[0] === "#" || tag[0] === "~" || tag[0] === "^") {
                            tagStack.push(tag.substr(1));
                        } else if (tag[0] === "/" &&
                                   (_.last(tagStack) === tag.substr(1) || _.last(tagStack) === "*" + tag.substr(1))) {
                            tagStack.pop();
                            if (tagStack.length === 0 && braceStack.length === 0) {
                                range = {
                                    from: openPos.to,
                                    to: {ch: i, line: currentLine}
                                };
                                return range;
                            }
                        } else {
                            braceStack.push("{{");
                        }
                    }
                }
                break;
            case "}":
                if (text[i + 1] === "}") {
                    braceStack.pop();
                    if (braceStack.length === 0 && tagStack.length === 0) {
                        range = {
                            from: openPos.to,
                            to: {ch: i, line: currentLine}
                        };
                        return range;
                    }
                }
                break;
            case "\"":
            case "'":
                found = scanTextUntil(cm, i + 1, currentLine, readUntil(text[i]));
                if (found) {
                    i = found.to.ch;
                    currentLine = found.to.line;
                }
                break;
            default:
                break;
            }

            ++i;
            if (i >= text.length) {
                ++currentLine;
                i = 0;
            }
        }
    }

    module.exports = getRange;
});
