function solve(input) {
    let result = input * input;
    let type = typeof (input);
    if (type === 'number') {
        result = (result * Math.PI).toFixed(2);

        console.log(result);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
solve(5);
