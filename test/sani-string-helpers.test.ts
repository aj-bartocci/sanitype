import { expect } from "chai";
import helpers from "../lib/helper/sani-string-helpers";

describe("sani-string", () => {
  describe("min", () => {
    it("throws if string length < min value", () => {
      const str = "yo";
      const min = () => helpers.min(str, 3);
      expect(min).to.throw();
    });
    it("does not throw if string length == min value", () => {
      const str = "sup";
      const min = () => helpers.min(str, str.length);
      expect(min).not.to.throw();
    });
    it("does not throw if string length > min value", () => {
      const str = "hello";
      const min = () => helpers.min(str, 3);
      expect(min).not.to.throw();
    });
  });

  describe("max", () => {
    it("throws if string length > max value", () => {
      const str = "ice coffee";
      const max = () => helpers.max(str, 6);
      expect(max).to.throw();
    });
    it("does not throw if string length == max value", () => {
      const str = "coffee";
      const max = () => helpers.max(str, str.length);
      expect(max).not.to.throw();
    });
    it("does not throw if string length < max value", () => {
      const str = "tea";
      const max = () => helpers.max(str, 6);
      expect(max).not.to.throw();
    });
  });

  describe("isAlphanumeric", () => {
    // should do more in depth testing but it's just using regex so it should work
    it("throws if string is not valid", () => {
      const str = "Im 1337";
      const isAlphanumeric = () => helpers.isAlphanumeric(str);
      expect(isAlphanumeric).to.throw();
    });

    it("does not throw if string is valid", () => {
      const str = "Im1337";
      const isAlphanumeric = () => helpers.isAlphanumeric(str);
      expect(isAlphanumeric).not.to.throw();
    });
  });

  describe("regex", () => {
    // should do more in depth testing but it's just using regex so it should work
    it("throws if regex check fails", () => {
      const str = "OneHundred";
      const regex = () => helpers.regex(str, /^[0-9]+$/);
      expect(regex).to.throw();
    });

    it("does not throw if regex check succeeds", () => {
      const str = "100";
      const regex = () => helpers.regex(str, /^[0-9]+$/);
      expect(regex).not.to.throw();
    });
  });
});
