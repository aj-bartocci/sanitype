"use strict";
exports.__esModule = true;
var sani_string_1 = require("./sani-string");
var optional_sani_string_1 = require("./optional-sani-string");
var sani_bool_1 = require("./sani-bool");
var sani_number_1 = require("./sani-number");
var Sanitype = /** @class */ (function () {
    function Sanitype() {
    }
    // TODO: add 'strict' flag that can be enabled that will not coerce types
    // TODO: add optionals for each type
    // add optional varName argument for the error output
    // static string(val: any, varName?: string): SaniString {
    //   if (typeof val === "string") {
    //     return new SaniString(val);
    //   }
    //   const name = varName ? `${varName} with value ` : "";
    //   throw new Error(`${name}${val} is not a string`);
    // }
    /*
     * Validates a potential string
     * @param val: the value to validate
     * @return SaniString
     */
    Sanitype.string = function (val) {
        if (typeof val === "string") {
            return new sani_string_1["default"](val);
        }
        if (typeof val === "number") {
            return new sani_string_1["default"](val.toString());
        }
        if (typeof val === "boolean") {
            var str = val ? "true" : "false";
            return new sani_string_1["default"](str);
        }
        throw new Error(val + " is not a string");
    };
    /*
     * Validates a potential optional string
     * @param val: the value to validate
     * @return OptionalSaniString
     */
    Sanitype.optionalString = function (val) {
        if (!val) {
            return new optional_sani_string_1["default"](val);
        }
        if (typeof val === "string") {
            return new optional_sani_string_1["default"](val);
        }
        if (typeof val === "number") {
            return new optional_sani_string_1["default"](val.toString());
        }
        if (typeof val === "boolean") {
            var str = val ? "true" : "false";
            return new optional_sani_string_1["default"](str);
        }
        throw new Error(val + " is not a string");
    };
    /*
     * Validates a potential number
     * @param val: the value to validate
     * @return SaniNumber
     */
    Sanitype.number = function (val) {
        if (typeof val === "number") {
            return new sani_number_1["default"](val);
        }
        if (typeof val === "string") {
            var num = Number(val);
            if (num) {
                return new sani_number_1["default"](num.valueOf());
            }
        }
        throw new Error(val + " is not a number");
    };
    /*
     * Strictly validate a boolean must be either true, false, 'true', or 'false'
     * @param val: the value to validate
     * @return SaniBool
     */
    Sanitype.bool = function (val) {
        if (typeof val === "boolean") {
            return new sani_bool_1["default"](val);
        }
        if (val === "true") {
            return new sani_bool_1["default"](true);
        }
        if (val === "false") {
            return new sani_bool_1["default"](false);
        }
        throw new Error(val + " is not a boolean");
    };
    return Sanitype;
}());
exports["default"] = Sanitype;
