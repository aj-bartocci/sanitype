import SaniString from "./sani-string";
import OptionalSaniString from "./optional-sani-string";
import SaniBool from "./sani-bool";
import SaniNumber from "./sani-number";

class Sanitype {
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
  static string(val: any): SaniString {
    if (typeof val === "string") {
      return new SaniString(val);
    }
    if (typeof val === "number") {
      return new SaniString(val.toString());
    }
    if (typeof val === "boolean") {
      const str = val ? "true" : "false";
      return new SaniString(str);
    }
    throw new Error(`${val} is not a string`);
  }

  /*
   * Validates a potential optional string
   * @param val: the value to validate
   * @return OptionalSaniString
   */
  static optionalString(val: any): OptionalSaniString {
    if (!val) {
      return new OptionalSaniString(val);
    }
    if (typeof val === "string") {
      return new OptionalSaniString(val);
    }
    if (typeof val === "number") {
      return new OptionalSaniString(val.toString());
    }
    if (typeof val === "boolean") {
      const str = val ? "true" : "false";
      return new OptionalSaniString(str);
    }
    throw new Error(`${val} is not a string`);
  }

  /*
   * Validates a potential number
   * @param val: the value to validate
   * @return SaniNumber
   */
  static number(val: any): SaniNumber {
    if (typeof val === "number") {
      return new SaniNumber(val);
    }
    if (typeof val === "string") {
      const num = Number(val);
      if (num) {
        return new SaniNumber(num.valueOf());
      }
    }
    throw new Error(`${val} is not a number`);
  }

  /*
   * Strictly validate a boolean must be either true, false, 'true', or 'false'
   * @param val: the value to validate
   * @return SaniBool
   */
  static bool(val: any): SaniBool {
    if (typeof val === "boolean") {
      return new SaniBool(val);
    }
    if (val === "true") {
      return new SaniBool(true);
    }
    if (val === "false") {
      return new SaniBool(false);
    }
    throw new Error(`${val} is not a boolean`);
  }
}

export default Sanitype;
