"use strict";
exports.__esModule = true;
var SaniNumber = /** @class */ (function () {
    function SaniNumber(val) {
        this.val = val;
    }
    /*
     * Validates min value (inclusive)
     * @param num: the value to validate
     * @return SaniNumber
     */
    SaniNumber.prototype.min = function (num) {
        if (this.val < num) {
            throw new Error(this.val + " must be greater than " + (num - 1));
        }
        return this;
    };
    /*
     * Validates max value (inclusive)
     * @param num: the value to validate
     * @return SaniNumber
     */
    SaniNumber.prototype.max = function (num) {
        if (this.val > num) {
            throw new Error(this.val + " must be less than " + (num + 1));
        }
        return this;
    };
    /*
     * Validates whether the value is an integer or not
     * @return SaniNumber
     */
    SaniNumber.prototype.isInteger = function () {
        if (!Number.isInteger(this.val)) {
            throw new Error(this.val + " is not an integer");
        }
        return this;
    };
    /*
     * Returns the underlying number value
     * @return number
     */
    SaniNumber.prototype.value = function () {
        return this.val;
    };
    return SaniNumber;
}());
exports["default"] = SaniNumber;
