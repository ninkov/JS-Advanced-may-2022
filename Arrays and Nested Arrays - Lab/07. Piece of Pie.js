function solve(arrayInput, startTarget, endTarget) {
    let firstIndex = arrayInput.indexOf(startTarget);
    let secondIndex = arrayInput.indexOf(endTarget);


    let result = arrayInput.slice(firstIndex, secondIndex+1)
    return result;
}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'

);
