"use strict";
exports.__esModule = true;
var sani_string_helpers_1 = require("./helper/sani-string-helpers");
var SaniString = /** @class */ (function () {
    function SaniString(val) {
        this.val = val;
    }
    // constructor(val: string, varName?: string) {
    //   this.val = val;
    //   this.varName = varName;
    // }
    SaniString.prototype.min = function (len) {
        sani_string_helpers_1["default"].min(this.val, len);
        return this;
    };
    SaniString.prototype.max = function (len) {
        sani_string_helpers_1["default"].max(this.val, len);
        return this;
    };
    SaniString.prototype.isAlphanumeric = function () {
        sani_string_helpers_1["default"].isAlphanumeric(this.val);
        return this;
    };
    SaniString.prototype.regex = function (regex) {
        sani_string_helpers_1["default"].regex(this.val, regex);
        return this;
    };
    /*
     * Returns the underlying string value
     * @return string
     */
    SaniString.prototype.value = function () {
        return this.val;
    };
    return SaniString;
}());
exports["default"] = SaniString;
