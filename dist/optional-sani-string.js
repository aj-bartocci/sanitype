"use strict";
exports.__esModule = true;
var sani_string_helpers_1 = require("./helper/sani-string-helpers");
var OptionalSaniString = /** @class */ (function () {
    function OptionalSaniString(val) {
        this.val = val;
    }
    // constructor(val: string, varName?: string) {
    //   this.val = val;
    //   this.varName = varName;
    // }
    OptionalSaniString.prototype.min = function (len) {
        if (this.val) {
            sani_string_helpers_1["default"].min(this.val, len);
        }
        return this;
    };
    OptionalSaniString.prototype.max = function (len) {
        if (this.val) {
            sani_string_helpers_1["default"].max(this.val, len);
        }
        return this;
    };
    OptionalSaniString.prototype.isAlphanumeric = function () {
        if (this.val) {
            sani_string_helpers_1["default"].isAlphanumeric(this.val);
        }
        return this;
    };
    OptionalSaniString.prototype.regex = function (regex) {
        if (this.val) {
            sani_string_helpers_1["default"].regex(this.val, regex);
        }
        return this;
    };
    /*
     * Returns the underlying string value or null if it was never found
     * @return string
     */
    OptionalSaniString.prototype.value = function () {
        return this.val;
    };
    return OptionalSaniString;
}());
exports["default"] = OptionalSaniString;
