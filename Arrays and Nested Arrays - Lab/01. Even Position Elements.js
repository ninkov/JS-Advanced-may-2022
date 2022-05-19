function solve(input) {
  let inputL = input.length;
  let result = "";
  for (let i = 0; i < inputL; i++) {
    if (i % 2 === 0) {
      result += input[i] + " ";
    }
  }
  console.log(result);
}
solve(["20", "30", "40", "50", "60"]); output: 20 40 60
solve(['5', '10']); output: 5
