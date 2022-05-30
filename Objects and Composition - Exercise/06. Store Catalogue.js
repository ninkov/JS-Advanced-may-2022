function storageCatalogue(input) {
  let output = {};

  for (const line of input) {
    let [productName, productPrice] = line.split(" : ");
    productPrice = Number(productPrice);
    if (!output.hasOwnProperty(productName)) {
      output[productName] = productPrice;
    }
  }
  let sorted = Object.keys(output).sort((a, b) => a.localeCompare(b));
  let letter = "";
  for (const line of sorted) {
    const product = line;
    if (letter !== product[0]) {
      letter = product[0];
      console.log(letter);
    }
    console.log(` ${product}: ${output[product]}`);
  }
}

storageCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
