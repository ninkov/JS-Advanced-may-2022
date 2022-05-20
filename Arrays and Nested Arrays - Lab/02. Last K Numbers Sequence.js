function solve(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let top = i - k;
    let sum = 0;
    for (let j = i - 1; j >= top; j--) {
      if (j < 0) {
        break;
      }
      sum += result[j];
    }
    result.push(sum);
  }
  return result;
}
solve(6, 3) //output	[1, 1, 2, 4, 7, 13]
