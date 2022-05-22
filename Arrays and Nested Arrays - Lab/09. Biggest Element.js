function solve(input) {
  let maxValue =Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    for (const line of element) {
      if (line > maxValue) {
        maxValue = line;
      }
    }
  }
  console.log(maxValue);
}
solve([[1,-1],[-1,0]]);
