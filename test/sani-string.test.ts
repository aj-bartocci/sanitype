import { expect } from "chai";
import sani from "../lib/sani-string";

describe("sani-string", () => {
  describe("min", () => {
    it("should return itself if valid", () => {
      const str = "Frank Reynolds";
      const saniString = new sani(str);
      const chain = saniString.min(3);
      expect(saniString).to.equal(chain);
    });
  });
  describe("max", () => {
    it("should return itself if valid", () => {
      const str = "Charlie Kelly";
      const saniString = new sani(str);
      const chain = saniString.max(20);
      expect(saniString).to.equal(chain);
    });
  });
  describe("isAlphanumeric", () => {
    it("should return itself if valid", () => {
      const str = "Mac";
      const saniString = new sani(str);
      const chain = saniString.isAlphanumeric();
      expect(saniString).to.equal(chain);
    });
  });
  describe("regex", () => {
    it("should return itself if valid", () => {
      const str = "The waitress";
      const saniString = new sani(str);
      const chain = saniString.regex(/^[a-zA-Z\s]/);
      expect(saniString).to.equal(chain);
    });
  });
  describe("value", () => {
    it("should return underlying value", () => {
      const str = "Cricket";
      const saniString = new sani(str);
      const value = saniString.value();
      expect(value).to.equal(str);
    });
  });
});
