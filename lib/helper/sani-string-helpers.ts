class SaniStringHelpers {
  static min(str: string, len: number) {
    if (str.length < len) {
      throw new Error(`length of ${str} must be at least ${len} characters`);
    }
  }

  static max(str: string, len: number) {
    if (str.length > len) {
      throw new Error(
        `length of ${str} must be shorter than ${len} characters`
      );
    }
  }

  static isAlphanumeric(str: string) {
    const regex = /^[a-z0-9]+$/i;
    if (regex.exec(str) === null) {
      throw new Error(`${str} is not alphanumeric`);
    }
  }

  static regex(str: string, exp: RegExp) {
    if (exp.exec(str) === null) {
      throw new Error(`${str} failed regex`);
    }
    return this;
  }
}

export default SaniStringHelpers;
