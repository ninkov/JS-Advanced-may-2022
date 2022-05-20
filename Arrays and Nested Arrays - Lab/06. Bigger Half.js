function solve(input) {
    let sortedArray = input.sort((a, b) => a - b);
    let start = sortedArray.length / 2;
    let result = [];
    if (start / 10 === 0) {
        start = Math.ceil(start);
    } else {
        start = Math.floor(start);

    }
    for (let i = start; i < sortedArray.length; i++) {
        result.push(sortedArray[i]);
    }
    return result;
}
// solve([4,7,2,5]);
solve([1, 2, 8, 3])
