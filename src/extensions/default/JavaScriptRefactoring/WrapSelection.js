/*
 * GNU AGPL-3.0 License
 *
 * Modified Work Copyright (c) 2021 - present core.ai . All rights reserved.
 * Original work Copyright (c) 2013 - 2021 Adobe Systems Incorporated. All rights reserved.
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

define(function (require, exports, module) {


    var _ = brackets.getModule("thirdparty/lodash");

    var EditorManager        = brackets.getModule("editor/EditorManager"),
        TokenUtils           = brackets.getModule("utils/TokenUtils"),
        Strings              = brackets.getModule("strings"),
        RefactoringUtils     = require("RefactoringUtils"),
        RefactoringSession   = RefactoringUtils.RefactoringSession;

    //Template keys mentioned in Templates.json
    var WRAP_IN_CONDITION       = "wrapCondition",
        ARROW_FUNCTION          = "arrowFunction",
        GETTERS_SETTERS         = "gettersSetters",
        TRY_CATCH               = "tryCatch";

    //Active session which will contain information about editor, selection etc
    var current = null;

    /**
     * Initialize session
     */
    function initializeRefactoringSession(editor) {
        current = new RefactoringSession(editor);
    }

    /**
     * Wrap selected statements
     *
     * @param {string} wrapperName - template name where we want wrap selected statements
     * @param {string} err- error message if we can't wrap selected code
     */
    function _wrapSelectedStatements (wrapperName, err) {
        var editor = EditorManager.getActiveEditor();
        if (!editor) {
            return;
        }
        initializeRefactoringSession(editor);

        var startIndex = current.startIndex,
            endIndex = current.endIndex,
            selectedText = current.selectedText,
            pos;

        if (selectedText.length === 0) {
            var statementNode = RefactoringUtils.findSurroundASTNode(current.ast, {start: startIndex}, ["Statement"]);
            if (!statementNode) {
                current.editor.displayErrorMessageAtCursor(err);
                return;
            }
            selectedText = current.text.substr(statementNode.start, statementNode.end - statementNode.start);
            startIndex = statementNode.start;
            endIndex = statementNode.end;
        } else {
            var selectionDetails = RefactoringUtils.normalizeText(selectedText, startIndex, endIndex);
            selectedText = selectionDetails.text;
            startIndex = selectionDetails.start;
            endIndex = selectionDetails.end;
        }

        if (!RefactoringUtils.checkStatement(current.ast, startIndex, endIndex, selectedText)) {
            current.editor.displayErrorMessageAtCursor(err);
            return;
        }

        pos = {
            "start": current.cm.posFromIndex(startIndex),
            "end": current.cm.posFromIndex(endIndex)
        };

        current.document.batchOperation(function() {
            current.replaceTextFromTemplate(wrapperName, {body: selectedText}, pos);
        });

        if (wrapperName === TRY_CATCH) {
            var cursorLine = current.editor.getSelection().end.line - 1,
                startCursorCh = current.document.getLine(cursorLine).indexOf("\/\/"),
                endCursorCh = current.document.getLine(cursorLine).length;

            current.editor.setSelection({"line": cursorLine, "ch": startCursorCh}, {"line": cursorLine, "ch": endCursorCh});
        } else if (wrapperName === WRAP_IN_CONDITION) {
            current.editor.setSelection({"line": pos.start.line, "ch": pos.start.ch + 4}, {"line": pos.start.line, "ch": pos.start.ch + 13});
        }
    }


     //Wrap selected statements in try catch block
    function wrapInTryCatch() {
        _wrapSelectedStatements(TRY_CATCH, Strings.ERROR_TRY_CATCH);
    }

    //Wrap selected statements in try condition
    function wrapInCondition() {
        _wrapSelectedStatements(WRAP_IN_CONDITION, Strings.ERROR_WRAP_IN_CONDITION);
    }

    //Convert function to arrow function
    function convertToArrowFunction() {
        var editor = EditorManager.getActiveEditor();
        if (!editor) {
            return;
        }
        initializeRefactoringSession(editor);

        var funcExprNode = RefactoringUtils.findSurroundASTNode(current.ast, {start: current.startIndex}, ["Function"]);

        if (!funcExprNode || funcExprNode.type !== "FunctionExpression" || funcExprNode.id) {
            current.editor.displayErrorMessageAtCursor(Strings.ERROR_ARROW_FUNCTION);
            return;
        }

        if (funcExprNode === "FunctionDeclaration") {
            current.editor.displayErrorMessageAtCursor(Strings.ERROR_ARROW_FUNCTION);
            return;
        }

        if (!funcExprNode.body) {
            return;
        }

        var noOfStatements = funcExprNode.body.body.length,
            selectedText = current.text.substr(funcExprNode.start, funcExprNode.end - funcExprNode.start),
            param = [],
            dontChangeParam = false,
            numberOfParams = funcExprNode.params.length,
            treatAsManyParam = false;

        funcExprNode.params.forEach(function (item) {
            if (item.type === "Identifier") {
                param.push(item.name);
            } else if (item.type === "AssignmentPattern") {
                dontChangeParam = true;
            }
        });

        //In case defaults params keep params as it is
        if (dontChangeParam) {
            if (numberOfParams >= 1) {
                param.splice(0, param.length);
                param.push(current.text.substr(funcExprNode.params[0].start, funcExprNode.params[numberOfParams-1].end - funcExprNode.params[0].start));
                // In case default param, treat them as many paramater because to use
                // one parameter template, That param should be an identifier
                if (numberOfParams === 1) {
                    treatAsManyParam = true;
                }
            }
            dontChangeParam = false;
        }

        var loc = {
                "fullFunctionScope": {
                    start: funcExprNode.start,
                    end: funcExprNode.end
                },
                "functionsDeclOnly": {
                    start: funcExprNode.start,
                    end: funcExprNode.body.start
                }
            },
            locPos = {
                "fullFunctionScope": {
                    "start": current.cm.posFromIndex(loc.fullFunctionScope.start),
                    "end": current.cm.posFromIndex(loc.fullFunctionScope.end)
                },
                "functionsDeclOnly": {
                    "start": current.cm.posFromIndex(loc.functionsDeclOnly.start),
                    "end": current.cm.posFromIndex(loc.functionsDeclOnly.end)
                }
            },
            isReturnStatement = (noOfStatements >= 1 && funcExprNode.body.body[0].type === "ReturnStatement"),
            bodyStatements = funcExprNode.body.body[0],
            params;

            // If there is nothing in function body, then get the text b/w curly braces
            // In this case, We will update params only as per Arrow function expression
        if (!bodyStatements) {
            bodyStatements = funcExprNode.body;
        }
        params = {
            "params": param.join(", "),
            "statement": _.trimRight(current.text.substr(bodyStatements.start, bodyStatements.end - bodyStatements.start), ";")
        };

        if (isReturnStatement) {
            params.statement = params.statement.substr(7).trim();
        }

        if (noOfStatements === 1) {
            current.document.batchOperation(function() {
                (numberOfParams === 1 && !treatAsManyParam) ?  current.replaceTextFromTemplate(ARROW_FUNCTION, params, locPos.fullFunctionScope, "oneParamOneStament") :
                current.replaceTextFromTemplate(ARROW_FUNCTION, params, locPos.fullFunctionScope, "manyParamOneStament");

            });
        } else {
            current.document.batchOperation(function() {
                (numberOfParams === 1 && !treatAsManyParam) ?  current.replaceTextFromTemplate(ARROW_FUNCTION, {params: param},
                locPos.functionsDeclOnly, "oneParamManyStament") :
                current.replaceTextFromTemplate(ARROW_FUNCTION, {params: param.join(", ")}, locPos.functionsDeclOnly, "manyParamManyStament");
            });
        }

        current.editor.setCursorPos(locPos.functionsDeclOnly.end.line, locPos.functionsDeclOnly.end.ch, false);
    }

    // Create gtteres and setters for a property
    function createGettersAndSetters() {
        var editor = EditorManager.getActiveEditor();
        if (!editor) {
            return;
        }
        initializeRefactoringSession(editor);

        var startIndex = current.startIndex,
            endIndex = current.endIndex,
            selectedText = current.selectedText;

        if (selectedText.length >= 1) {
            var selectionDetails = RefactoringUtils.normalizeText(selectedText, startIndex, endIndex);
            selectedText = selectionDetails.text;
            startIndex = selectionDetails.start;
            endIndex = selectionDetails.end;
        }

        var token = TokenUtils.getTokenAt(current.cm, current.cm.posFromIndex(endIndex)),
            commaString = ",",
            isLastNode,
            templateParams,
            parentNode,
            propertyEndPos;

        //Create getters and setters only if selected reference is a property
        if (token.type !== "property") {
            current.editor.displayErrorMessageAtCursor(Strings.ERROR_GETTERS_SETTERS);
            return;
        }

        parentNode = current.getParentNode(current.ast, endIndex);
        // Check if selected propery is child of a object expression
        if (!parentNode || !parentNode.properties) {
            current.editor.displayErrorMessageAtCursor(Strings.ERROR_GETTERS_SETTERS);
            return;
        }


        var propertyNodeArray = parentNode.properties;
        // Find the last Propery Node before endIndex
        var properyNodeIndex = propertyNodeArray.findIndex(function (element) {
            return (endIndex >= element.start && endIndex < element.end);
        });

        var propertyNode = propertyNodeArray[properyNodeIndex];

        //Get Current Selected Property End Index;
        propertyEndPos = editor.posFromIndex(propertyNode.end);


        //We have to add ',' so we need to find position of current property selected
        isLastNode = current.isLastNodeInScope(current.ast, endIndex);
        var nextPropertNode, nextPropertyStartPos;
        if(!isLastNode && properyNodeIndex + 1 <= propertyNodeArray.length - 1) {
            nextPropertNode = propertyNodeArray[properyNodeIndex + 1];
            nextPropertyStartPos = editor.posFromIndex(nextPropertNode.start);

            if(propertyEndPos.line !== nextPropertyStartPos.line) {
                propertyEndPos = current.lineEndPosition(current.startPos.line);
            } else {
                propertyEndPos = nextPropertyStartPos;
                commaString = ", ";
            }
        }

        var getSetPos;
        if (isLastNode) {
            getSetPos = current.document.adjustPosForChange(propertyEndPos, commaString.split("\n"),
                                                            propertyEndPos, propertyEndPos);
        } else {
            getSetPos = propertyEndPos;
        }
        templateParams = {
            "getName": token.string,
            "setName": token.string,
            "tokenName": token.string
        };

        // Replace, setSelection, IndentLine
        // We need to call batchOperation as indentLine don't have option to add origin as like replaceRange
        current.document.batchOperation(function() {
            if (isLastNode) {
                //Add ',' in the end of current line
                current.document.replaceRange(commaString, propertyEndPos, propertyEndPos);
            }

            current.editor.setSelection(getSetPos); //Selection on line end

            // Add getters and setters for given token using template at current cursor position
            current.replaceTextFromTemplate(GETTERS_SETTERS, templateParams);

            if (!isLastNode) {
                // Add ',' at the end setter
                current.document.replaceRange(commaString, current.editor.getSelection().start, current.editor.getSelection().start);
            }
        });
    }

    exports.wrapInCondition         = wrapInCondition;
    exports.wrapInTryCatch          = wrapInTryCatch;
    exports.convertToArrowFunction  = convertToArrowFunction;
    exports.createGettersAndSetters = createGettersAndSetters;
});
