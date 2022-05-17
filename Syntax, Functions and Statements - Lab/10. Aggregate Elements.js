function solve(input) {
    let sum =0;
sum=input.reduce((a,b)=>a+b);
let inverseSum = 0;
for (let i = 0; i < input.length; i++) {
    inverseSum += 1/input[i];
    
}
let concatElements =input.join('');


console.log(sum);
console.log(inverseSum);
console.log(concatElements);
}
solve([2, 4, 8,16]);
