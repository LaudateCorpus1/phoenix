/*
 * GNU AGPL-3.0 License
 *
 * Modified Work Copyright (c) 2021 - present core.ai . All rights reserved.
 * Original work Copyright (c) 2015 - 2021 Adobe Systems Incorporated. All rights reserved.
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


    var LanguageManager = brackets.getModule("language/LanguageManager"),
        CodeMirror      = brackets.getModule("thirdparty/CodeMirror/lib/codemirror");

    brackets.getModule(["thirdparty/CodeMirror/mode/handlebars/handlebars"], function () {
        CodeMirror.defineMode("htmlhandlebars", function (config) {
            return CodeMirror.multiplexingMode(
                CodeMirror.getMode(config, "text/html"),
                {
                    open: "{{",
                    close: "}}",
                    mode: CodeMirror.getMode(config, "handlebars"),
                    parseDelimiters: true
                }
            );
        });
        CodeMirror.defineMIME("text/x-handlebars-template", "htmlhandlebars");

        LanguageManager.defineLanguage("handlebars", {
            name: "Handlebars",
            mode: ["htmlhandlebars", "text/x-handlebars-template"],
            fileExtensions: ["hbs", "handlebars"],
            blockComment: ["{{!", "}}"]
        });
    });
});
