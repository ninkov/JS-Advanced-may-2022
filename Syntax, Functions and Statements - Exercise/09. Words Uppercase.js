function solve(input) {
    let res = [];
    let output = input.split(/[\W]+/);
    for (const line of output) {
        if (line) {
            res.push(line);
        }
    }
    console.log(res.join(', ').toUpperCase());
}
solve('Hi, how are you?');
