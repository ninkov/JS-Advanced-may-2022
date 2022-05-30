function lowestPriceInCities(input) {
  let output = {};
  for (const line of input) {
    let text = line.split(" | ");
    let townName = text[0];
    let productName = text[1];
    let productPrice = Number(text[2]);

    if (!output.hasOwnProperty(productName)) {
      output[productName] = { townName, productPrice };
      //console.log(output[productName] );
    } else {
      if (productPrice < output[productName].productPrice) {
        output[productName] = { townName, productPrice };
      }
    }
  }
    //{productName} -> {productLowestPrice} ({townName})
    let result = Object.keys(output);

    for (let line of result) {
        const productName=line;

      console.log(
        `${productName} -> ${output[productName].productPrice} (${
         output[productName].townName
        })`
      );
    }
  
}
lowestPriceInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
