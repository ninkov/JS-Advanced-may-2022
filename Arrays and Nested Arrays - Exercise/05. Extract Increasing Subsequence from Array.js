function solve(input) {
  let biggest = Number.MIN_SAFE_INTEGER;
  let result = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[i];

    if (biggest <= element) {
      biggest = element;
      result.push(biggest);
    }
  }
  // console.log(result);
  return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24, 24]);
solve([20, 3, 2, 15, 6, 1]);
solve([1, 2, 3, 4]);
