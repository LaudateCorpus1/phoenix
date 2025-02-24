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

/*jslint regexp: true */

define(function (require, exports, module) {


    /**
     * Base class for live preview servers
     *
     * Configuration parameters for this server:
     * - baseUrl      - Optional base URL (populated by the current project)
     * - pathResolver - Function to covert absolute native paths to project relative paths
     * - root         - Native path to the project root (and base URL)
     *
     * @constructor
     * @param {!{baseUrl: string, root: string, pathResolver: function(string): string}} config
     */
    function BaseServer(config) {
        this._baseUrl       = config.baseUrl;
        this._root          = config.root;          // ProjectManager.getProjectRoot().fullPath
        this._pathResolver  = config.pathResolver;  // ProjectManager.makeProjectRelativeIfPossible(doc.file.fullPath)
        this._liveDocuments = {};
    }

    /**
     * Returns a base url for current project.
     *
     * @return {string}
     * Base url for current project.
     */
    BaseServer.prototype.getBaseUrl = function () {
        return this._baseUrl;
    };

    /**
     * @private
     * Augments the given Brackets document with information that's useful for live development
     * @param {Object} liveDocument
     */
    BaseServer.prototype._setDocInfo = function (liveDocument) {
        var parentUrl,
            matches,
            doc = liveDocument.doc;

        // FUTURE: some of these things should just be moved into core Document; others should
        // be in a LiveDevelopment-specific object attached to the doc.
        matches = /^(.*\/)(.+\.([^.]+))$/.exec(doc.file.fullPath);
        if (!matches) {
            return;
        }

        doc.extension = matches[3];

        parentUrl = this.pathToUrl(matches[1]);
        doc.url = parentUrl + encodeURI(matches[2]);

        // the root represents the document that should be displayed in the browser
        // for live development (the file for HTML files)
        // TODO: Issue #2033 Improve how default page is determined
        doc.root = { url: doc.url };

        // TODO: Better workflow of liveDocument.doc.url assignment
        // Force sync the browser after a URL is assigned
        if (doc.isDirty && liveDocument._updateBrowser) {
            liveDocument._updateBrowser();
        }
    };

    /**
     * Returns a URL for a given path
     * @param {string} path Absolute path to covert to a URL
     * @return {?string} Converts a path within the project root to a URL.
     *  Returns null if the path is not a descendant of the project root.
     */
    BaseServer.prototype.pathToUrl = function (path) {
        var baseUrl         = this.getBaseUrl(),
            relativePath    = this._pathResolver(path);

        // See if base url has been specified and path is within project
        if (relativePath !== path) {
            // Map to server url. Base url is already encoded, so don't encode again.
            var encodedDocPath = encodeURI(path);
            var encodedProjectPath = encodeURI(this._root);

            return encodedDocPath.replace(encodedProjectPath, baseUrl);
        }

        return null;
    };

    /**
     * Convert a URL to a local full file path
     * @param {string} url
     * @return {?string} The absolute path for given URL or null if the path is
     *  not a descendant of the project.
     */
    BaseServer.prototype.urlToPath = function (url) {
        var path,
            baseUrl = "";

        baseUrl = this.getBaseUrl();

        if (baseUrl !== "" && url.indexOf(baseUrl) === 0) {
            // Use base url to translate to local file path.
            // Need to use encoded project path because it's decoded below.
            path = url.replace(baseUrl, encodeURI(this._root));

            return decodeURI(path);
        }

        return null;
    };

    /**
     * Called by LiveDevelopment before to prepare the server before navigating
     * to the project's base URL. The provider returns a jQuery promise.
     * The Live Development launch process waits until the promise
     * is resolved or rejected. If the promise is rejected, an error window
     * is shown and Live Development does not start..
     *
     * @return {jQuery.Promise} Promise that may be asynchronously resolved
     *  when the server is ready to handle HTTP requests.
     */
    BaseServer.prototype.readyToServe = function () {
        // Base implementation always resolves
        return $.Deferred().resolve().promise();
    };

    /**
     * Determines if this server can serve local file. LiveDevServerManager
     * calls this method when determining if a server can serve a file.
     * @param {string} localPath A local path to file being served.
     * @return {boolean} true When the file can be served, otherwise false.
     */
    BaseServer.prototype.canServe = function (localPath) {
        return true;
    };

    BaseServer.prototype._documentKey = function (absolutePath) {
        return "/" + encodeURI(this._pathResolver(absolutePath));
    };

    /**
     * Adds a live document to server
     * @param {Object} liveDocument
     */
    BaseServer.prototype.add = function (liveDocument) {
        if (!liveDocument) {
            return;
        }

        // use the project relative path as a key to lookup requests
        var key = this._documentKey(liveDocument.doc.file.fullPath);

        this._setDocInfo(liveDocument);
        this._liveDocuments[key] = liveDocument;
    };

    /**
     * Removes a live document from the server
     * @param {Object} liveDocument
     */
    BaseServer.prototype.remove = function (liveDocument) {
        if (!liveDocument) {
            return;
        }

        var key = this._liveDocuments[this._documentKey(liveDocument.doc.file.fullPath)];

        if (key) {
            delete this._liveDocuments[key];
        }
    };

    /**
     * Lookup a live document using it's full path key
     * @param {string} path Absolute path to covert to a URL
     * @param {?Object} liveDocument Returns a live document or undefined if a
     *     document does not exist for the path.
     */
    BaseServer.prototype.get = function (path) {
        return this._liveDocuments[this._documentKey(path)];
    };

    /**
     * Clears all live documents currently attached to the server
     */
    BaseServer.prototype.clear = function () {
        this._liveDocuments = {};
    };

    /**
     * Start the server
     */
    BaseServer.prototype.start = function () {
        // do nothing
    };

    /**
     * Stop the server
     */
    BaseServer.prototype.stop = function () {
        // do nothing
    };

    exports.BaseServer = BaseServer;
});
