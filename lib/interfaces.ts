export interface ISaniString {
  min(len: number): ISaniString;
  max(len: number): ISaniString;
  isAlphanumeric(): ISaniString;
  regex(regex: RegExp): ISaniString;
  value(): string;
}

export interface IOptionalSaniString {
  min(len: number): IOptionalSaniString;
  max(len: number): IOptionalSaniString;
  isAlphanumeric(): IOptionalSaniString;
  regex(regex: RegExp): IOptionalSaniString;
  value(): string | undefined;
}

export interface ISaniNumber {
  /*
   * Validates min value (inclusive)
   * @param num: the value to validate
   * @return SaniNumber
   */
  min(num: number): ISaniNumber;

  /*
   * Validates max value (inclusive)
   * @param num: the value to validate
   * @return SaniNumber
   */
  max(num: number): ISaniNumber;

  /*
   * Validates whether the value is an integer or not
   * @return SaniNumber
   */
  isInteger(): ISaniNumber;

  /*
   * Returns the underlying number value
   * @return number
   */
  value(): number;
}

export interface ISaniBool {
  value(): boolean;
}
