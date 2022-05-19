function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current<0) {
        res.unshift(current);
    }else{
        res.push(current);
    }
  }

  console.log(res);
}
solve([7, -2, 8, 9]); //output [-2, 7, 8, 9]
