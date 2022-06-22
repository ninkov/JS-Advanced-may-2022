const expect = require("chai").expect;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("should return undefined for non-number input", () => {
      expect(mathEnforcer.addFive("5")).to.equal(undefined);
    });
    it("should return correct result for positive integer input", () => {
      expect(mathEnforcer.addFive(10)).to.equal(15);
    });
    it("should return correct result for negative integer input", () => {
      expect(mathEnforcer.addFive(-1)).to.equal(4);
    });
    it("return correct result for floating point number", () => {
      expect(mathEnforcer.addFive(1.11)).to.be.closeTo(6.11, 0.01);
    });
  });
  describe("subtractTen", () => {
    it("should return undefined for non-number input", () => {
      expect(mathEnforcer.subtractTen("test")).to.equal(undefined);
    });
    it("should return correct result for positive integer input", () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });
    it("should return correct result for negative integer input", () => {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      });
      it("return correct result for floating point number", () => {
        expect(mathEnforcer.subtractTen(10.11)).to.be.closeTo(0.11, 0.01);
      });
  });
  describe("sum", () => {
    it("should return undefined for non-number input of first param", () => {
        expect(mathEnforcer.sum("5",2)).to.equal(undefined);
      });
      it("should return undefined for non-number input of second param", () => {
        expect(mathEnforcer.sum(2,"5")).to.equal(undefined);
      });
      it("should return sum of first and second params", () => {
        expect(mathEnforcer.sum(2,5)).to.equal(7);
      });
      it("return correct result for floating point number", () => {
        expect(mathEnforcer.sum(1.11,1.11)).to.be.closeTo(2.22,0.01);
      });
  });
});
