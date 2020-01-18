import helpers from "./helper/sani-string-helpers";

class OptionalSaniString {
  private val?: string | undefined;

  constructor(val?: string | undefined) {
    this.val = val;
  }

  // constructor(val: string, varName?: string) {
  //   this.val = val;
  //   this.varName = varName;
  // }

  min(len: number): OptionalSaniString {
    if (this.val) {
      helpers.min(this.val, len);
    }
    return this;
  }

  max(len: number): OptionalSaniString {
    if (this.val) {
      helpers.max(this.val, len);
    }
    return this;
  }

  isAlphanumeric(): OptionalSaniString {
    if (this.val) {
      helpers.isAlphanumeric(this.val);
    }
    return this;
  }

  regex(regex: RegExp): OptionalSaniString {
    if (this.val) {
      helpers.regex(this.val, regex);
    }
    return this;
  }

  /*
   * Returns the underlying string value or null if it was never found
   * @return string
   */
  value(): string | undefined {
    return this.val;
  }
}

export default OptionalSaniString;
