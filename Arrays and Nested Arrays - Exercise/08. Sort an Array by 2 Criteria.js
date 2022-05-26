function solve(input) {
  let result = input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(result.join("\n"));
}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
solve(["alpha", "beta", "gamma"]);
solve(["test", "Deny", "omen", "Default"]);
