function solve(input) {
    let num = 0;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        num++;
        const element = input[i];
        if (element === 'add') {
            result.push(num)
        } else {
            result.pop(num)
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {

        console.log(result.join('\n'));
    }

} solve(
    ['add',
        'add',
        'remove',
        'add',
        'add']
)
