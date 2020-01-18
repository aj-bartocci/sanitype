import sani from "../lib/sani-bool";
import { expect } from "chai";

describe("sani-bool", () => {
  describe("value", () => {
    it("should return underlying value", () => {
      const val = true;
      const saniBool = new sani(val);
      const value = saniBool.value();
      expect(value).to.equal(val);
    });
  });
});
