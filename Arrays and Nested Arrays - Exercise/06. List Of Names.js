function solve(input) {
  let result = input.sort((a, b) => a.localeCompare(b));
  let arrL = result.length;
  for (let i = 0; i < arrL; i++) {
    console.log(`${i + 1}.${result[i]}`);
  }
}
solve(["John", "Bob", "Christina", "Ema"]);
