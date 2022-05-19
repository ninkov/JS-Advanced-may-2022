function solve(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let output = sortedArr.slice(0, 2);
  console.log(output.join(" "));
}
solve([3, 0, 10, 4, 7, 3]);
solve([30]);
