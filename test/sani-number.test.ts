import sani from "../lib/sani-number";
import { expect } from "chai";

describe("sani-number", () => {
  describe("min", () => {
    // throws
    it("throws when number value is < min value", () => {
      const val = 3;
      const minVal = 4;
      const saniNum = new sani(val);
      const min = () => saniNum.min(minVal);
      expect(min).to.throw();
    });
    // no throws
    it("does not throw when number val == min vaue", () => {
      const val = 3;
      const minVal = val;
      const saniNum = new sani(val);
      const min = () => saniNum.min(minVal);
      expect(min).not.to.throw();
    });
    it("does not throw when number val > min vaue", () => {
      const val = 4;
      const minVal = 3;
      const saniNum = new sani(val);
      const min = () => saniNum.min(minVal);
      expect(min).not.to.throw();
    });
  });
  describe("max", () => {
    // throws
    it("throws when number value is > max value", () => {
      const val = 3;
      const maxVal = 2;
      const saniNum = new sani(val);
      const max = () => saniNum.max(maxVal);
      expect(max).to.throw();
    });
    // no throws
    it("does not throw when number val == max vaue", () => {
      const val = 3;
      const maxVal = val;
      const saniNum = new sani(val);
      const max = () => saniNum.max(maxVal);
      expect(max).not.to.throw();
    });
    it("does not throw when number val < max vaue", () => {
      const val = 3;
      const maxVal = 4;
      const saniNum = new sani(val);
      const max = () => saniNum.max(maxVal);
      expect(max).not.to.throw();
    });
  });
  describe("isInteger", () => {
    // throws
    it("throws when number value is a float", () => {
      const val = 1.1;
      const saniNum = new sani(val);
      const isInteger = () => saniNum.isInteger();
      expect(isInteger).to.throw();
    });
    // no throws
    it("does not throw when number value is integer", () => {
      const val = 1.0;
      const saniNum = new sani(val);
      const isInteger = () => saniNum.isInteger();
      expect(isInteger).not.to.throw();
    });
  });
  describe("value", () => {
    it("returns underlying value", () => {
      const val = 1;
      const saniNum = new sani(val);
      const value = saniNum.value();
      expect(value).to.equal(val);
    });
  });
});
