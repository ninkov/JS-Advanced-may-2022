function solve(inputNumber) {
    let sum = 0;
    let count = 0;
    let theNum = inputNumber % 10;

    while (inputNumber != 0) {
        sum += inputNumber % 10;
        count++;
        inputNumber = Math.floor(inputNumber / 10);
    }
    if (sum / count === theNum || sum === 0) {
        console.log("true");
        console.log(sum);
    } else {
        console.log("false");
        console.log(sum);
    }
}
solve(221);
