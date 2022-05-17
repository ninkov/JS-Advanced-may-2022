function solve(fruit,weight,price) {
    
    let money = price*(weight/1000);
    let result=`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`;
    console.log(result);
}
