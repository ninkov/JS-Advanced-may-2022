function solve(firstString,secondString,thirdString) {
    let firstStrLength = firstString.length;
    let secondStrLength = secondString.length;
    let thirdStrLength = thirdString.length;

    let sum = (firstStrLength+secondStrLength+thirdStrLength);
    let average = sum/3;

    console.log(sum);
    console.log(Math.floor(average));


}
solve('123456', '7', '8.5');
