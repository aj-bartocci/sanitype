"use strict";
exports.__esModule = true;
var SaniStringHelpers = /** @class */ (function () {
    function SaniStringHelpers() {
    }
    SaniStringHelpers.min = function (str, len) {
        if (str.length < len) {
            throw new Error("length of " + str + " must be at least " + len + " characters");
        }
    };
    SaniStringHelpers.max = function (str, len) {
        if (str.length > len) {
            throw new Error("length of " + str + " must be shorter than " + len + " characters");
        }
    };
    SaniStringHelpers.isAlphanumeric = function (str) {
        var regex = /^[a-z0-9]+$/i;
        if (regex.exec(str) === null) {
            throw new Error(str + " is not alphanumeric");
        }
    };
    SaniStringHelpers.regex = function (str, exp) {
        if (exp.exec(str) === null) {
            throw new Error(str + " failed regex");
        }
        return this;
    };
    return SaniStringHelpers;
}());
exports["default"] = SaniStringHelpers;
