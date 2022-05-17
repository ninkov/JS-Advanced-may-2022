function solve(input) {
    let res = '';
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            res += '*' + ' ';
        }
        res+="\n";
    }
    console.log(res);
}
solve(2);

