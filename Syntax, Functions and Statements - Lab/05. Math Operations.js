function solve(firstNum,secondNum,operator) {
    let result;
    if (operator==='+') {
        result=firstNum+secondNum;
    }else if(operator==='-'){
        result=firstNum-secondNum;
    }else if(operator==='*'){
        result=firstNum*secondNum;
    }else if(operator==='/'){
        result=firstNum/secondNum;
    }else if(operator==='%'){
        result=firstNum%secondNum;
    }else if(operator==='**'){
        result=firstNum**secondNum;
    }
    console.log(result);

}
solve(3, 5.5, '*');
