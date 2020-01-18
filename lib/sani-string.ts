import helpers from "./helper/sani-string-helpers";

class SaniString {
  private val: string;

  constructor(val: string) {
    this.val = val;
  }

  // constructor(val: string, varName?: string) {
  //   this.val = val;
  //   this.varName = varName;
  // }

  min(len: number): SaniString {
    helpers.min(this.val, len);
    return this;
  }

  max(len: number): SaniString {
    helpers.max(this.val, len);
    return this;
  }

  isAlphanumeric(): SaniString {
    helpers.isAlphanumeric(this.val);
    return this;
  }

  regex(regex: RegExp): SaniString {
    helpers.regex(this.val, regex);
    return this;
  }

  /*
   * Returns the underlying string value
   * @return string
   */
  value(): string {
    return this.val;
  }
}

export default SaniString;
