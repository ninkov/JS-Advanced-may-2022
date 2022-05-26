function solve(input) {
  let result = [];
  let sorted = input.sort((a, b) => a - b);
  let arrL = sorted.length;
  for (let i = 0; i < arrL / 2; i++) {
    result.push(sorted.shift());
    result.push(sorted.pop());
    //console.log(result);
  }
  return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
