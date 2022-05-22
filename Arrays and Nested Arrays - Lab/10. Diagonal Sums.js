function solve(input) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < input.length; i++) {
        const element = input[i][i];
        sum1 += element;
    }
    for (let i = 0; i < input.length; i++) {
        const element = input[i][input.length - 1 - i];
        sum2 += element;
    }
    console.log(`${sum1} ${sum2}`);
}
solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);
solve([[20, 40],
    [10, 60]]
   )
