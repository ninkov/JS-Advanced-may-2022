let expect = require("chai").expect;

function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

describe("is odd or even tests", () => {
  it("should be undefined if number,if array, if object", () => {
    expect(isOddOrEven(2)).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
  });
  // it("should be undefined if array", () => {
  // });
  // it("should be undefined if object", () => {

  //});
  it("should return odd if string is odd", () => {
    expect(isOddOrEven("123")).to.equal("odd");
  });
  it("should return even if string is even", () => {
    expect(isOddOrEven("1234")).to.equal("even");
  });
});
