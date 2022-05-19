function solve(input) {
  let result = 0;
  if (input.length > 1) {
      let first = Number(input.shift());
      let second =Number( input.pop());
    result = first + second;
  } else {
    result = Number(input);
  }
  return result;
}
solve(['20', '30', '40']); //output: 60
