function caloriesObject(input) {
  let result = {};
  for (let i = 0; i < input.length; i += 2) {
    let product = input[i];
    let calories = Number(input[i + 1]);
    if (result) {
      result[product] = calories;
    }
  }
  console.log(result);
}
caloriesObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
