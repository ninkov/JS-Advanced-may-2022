function solve(...params) {
    let num = Number(params.shift());
    let result;
    for (const line of params) {
        if (line === 'chop') {
            num /= 2;
            console.log(num);

        } else if (line === 'dice') {
            num = Math.sqrt(num);
            console.log(num);

        } else if (line === 'spice') {
            num += 1;
            console.log(num);


        } else if (line === 'bake') {
            result = num *= 3;
            console.log(num);


        } else if (line === 'fillet') {
            twentyPercentage = num * 0.2;
            num -= twentyPercentage;
            console.log(num);


        }
    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
