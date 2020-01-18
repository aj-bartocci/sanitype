import sani from "../lib/sanitype";
import { expect } from "chai";

describe("sanitype", () => {
  describe("string", () => {
    // throws
    it("throws when given an object value", () => {
      const val = {};
      const saniString = () => sani.string(val);
      expect(saniString).to.throw();
    });
    it("throws when given an array value", () => {
      const val = ["1"];
      const saniString = () => sani.string(val);
      expect(saniString).to.throw();
    });
    it("throws when given an undefined value", () => {
      let val;
      const saniString = () => sani.string(val);
      expect(saniString).to.throw();
    });
    // no throws
    it("does not throw when given a string", () => {
      const val = "Never gonna give you up";
      const saniString = () => sani.string(val);
      expect(saniString).not.to.throw();
    });
    it("does not throw when given a number value", () => {
      const val = 100;
      const saniString = () => sani.string(val);
      expect(saniString).not.to.throw();
    });
    it("does not throw when given a boolean value", () => {
      const val = true;
      const saniString = () => sani.string(val);
      expect(saniString).not.to.throw();
    });
  });

  describe("optional string", () => {
    // throws
    it("throws when given an object value", () => {
      const val = {};
      const optSaniString = () => sani.optionalString(val);
      expect(optSaniString).to.throw();
    });
    it("throws when given an array value", () => {
      const val = ["1"];
      const optSaniString = () => sani.optionalString(val);
      expect(optSaniString).to.throw();
    });
    // no throws
    it("does not throw when given an undefined value", () => {
      let val;
      const optSaniString = () => sani.optionalString(val);
      expect(optSaniString).not.to.throw();
    });
    it("does not throw when given a string", () => {
      const val = "Never gonna give you up";
      const optSaniString = () => sani.optionalString(val);
      expect(optSaniString).not.to.throw();
    });
    it("does not throw when given a number value", () => {
      const val = 100;
      const optSaniString = () => sani.optionalString(val);
      expect(optSaniString).not.to.throw();
    });
    it("does not throw when given a boolean value", () => {
      const val = true;
      const optSaniString = () => sani.optionalString(val);
      expect(optSaniString).not.to.throw();
    });
  });

  describe("number", () => {
    // throws
    it("throws when given a boolean", () => {
      const val = true;
      const saniNum = () => sani.number(val);
      expect(saniNum).to.throw();
    });
    it("throws when given an object value", () => {
      const val = {};
      const saniNum = () => sani.number(val);
      expect(saniNum).to.throw();
    });
    it("throws when given an array value", () => {
      const val = [1];
      const saniNum = () => sani.number(val);
      expect(saniNum).to.throw();
    });
    it("throws when given an undefined value", () => {
      let val;
      const saniNum = () => sani.number(val);
      expect(saniNum).to.throw();
    });
    it("throws when given an invalid string value", () => {
      const val = "1337a";
      const saniNum = () => sani.number(val);
      expect(saniNum).to.throw();
    });
    // no throws
    it("does not throw when given a number value", () => {
      const val = 1337;
      const saniNum = () => sani.number(val);
      expect(saniNum).not.to.throw();
    });
    it("does not throw when given a valid integer string value", () => {
      const val = "1337";
      const saniNum = () => sani.number(val);
      expect(saniNum).not.to.throw();
    });
    it("does not throw when given a valid float string value", () => {
      const val = "13.37";
      const saniNum = () => sani.number(val);
      expect(saniNum).not.to.throw();
    });
  });

  describe("bool", () => {
    // throws
    it("throws when given a number value", () => {
      const val = 1;
      const saniBool = () => sani.bool(val);
      expect(saniBool).to.throw();
    });
    it("throws when given an object value", () => {
      const val = {};
      const saniBool = () => sani.bool(val);
      expect(saniBool).to.throw();
    });
    it("throws when given an array value", () => {
      const val = [1];
      const saniBool = () => sani.bool(val);
      expect(saniBool).to.throw();
    });
    it("throws when given an undefined value", () => {
      let val;
      const saniBool = () => sani.bool(val);
      expect(saniBool).to.throw();
    });
    // no throws
    it("does not throw when given a boolean value", () => {
      const val = true;
      const saniBool = () => sani.bool(val);
      expect(saniBool).not.to.throw();
    });
    it("does not throw when given a 'true' string value", () => {
      const val = "true";
      const saniBool = () => sani.bool(val);
      expect(saniBool).not.to.throw();
    });
    it("does not throw when given a 'false' string value", () => {
      const val = "false";
      const saniBool = () => sani.bool(val);
      expect(saniBool).not.to.throw();
    });
  });
});
