class SaniNumber {
  private val: number;

  constructor(val: number) {
    this.val = val;
  }

  /*
   * Validates min value (inclusive)
   * @param num: the value to validate
   * @return SaniNumber
   */
  min(num: number): SaniNumber {
    if (this.val < num) {
      throw new Error(`${this.val} must be greater than ${num - 1}`);
    }
    return this;
  }

  /*
   * Validates max value (inclusive)
   * @param num: the value to validate
   * @return SaniNumber
   */
  max(num: number): SaniNumber {
    if (this.val > num) {
      throw new Error(`${this.val} must be less than ${num + 1}`);
    }
    return this;
  }

  /*
   * Validates whether the value is an integer or not
   * @return SaniNumber
   */
  isInteger(): SaniNumber {
    if (!Number.isInteger(this.val)) {
      throw new Error(`${this.val} is not an integer`);
    }
    return this;
  }

  /*
   * Returns the underlying number value
   * @return number
   */
  value() {
    return this.val;
  }
}

export default SaniNumber;
