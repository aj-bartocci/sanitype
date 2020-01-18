import { ISaniBool } from "./interfaces";

class SaniBool implements ISaniBool {
  private val: boolean;

  constructor(val: boolean) {
    this.val = val;
  }

  value(): boolean {
    return this.val;
  }
}

export default SaniBool;
