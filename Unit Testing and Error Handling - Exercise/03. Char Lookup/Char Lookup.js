let expect = require("chai").expect;

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe("test", () => {
  it("check the first parameter type is valid", () => {
    expect(lookupChar(0, 0)).to.equal(undefined);
  });
  it("check the second parameter type is valid", () => {
    expect(lookupChar("hello", "12")).to.equal(undefined); //check  with other string if test fail
  });
  it("check the second parameter is valid integer", () => {
    expect(lookupChar("hello", 0.1)).to.equal(undefined);
  });

  it("check value with index bigger then string length", () => {
    expect(lookupChar("test", 12)).to.equal("Incorrect index");
  });
  it("check value with negative index", () => {
    expect(lookupChar("test", -12)).to.equal("Incorrect index");
  });
  it("check value with valid params", () => {
    expect(lookupChar("test", 2)).to.equal("s");
  });
});
