function solve(input) {
let output = [];
    let result = input.filter((n, i) => {
        if ((i % 2 !== 0)) {
            output.push(n*2)
        }
    })
    console.log(output.reverse().join(' '));
  
}
solve([3, 0, 10, 4, 7, 3]);
