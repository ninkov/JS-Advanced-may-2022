function solve() {
  let inputText = document.getElementById("text").value;
  let manipulationCase = document.getElementById("naming-convention").value;
  let result = "";

  if (manipulationCase === "Camel Case") {
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === " ") {
        result += inputText[i + 1].toUpperCase();
        i++;
      } else {
        result += inputText[i].toLowerCase();
      }
    }
  } else if (manipulationCase === "Pascal Case") {
    result += inputText[0].toUpperCase();
    for (let i = 1; i < inputText.length; i++) {
      if (inputText[i] === " ") {
        result += inputText[i + 1].toUpperCase();
        i++;
      } else {
        result += inputText[i].toLowerCase();
      }
    }
  } else {
    result = "Error!";
  }
  let output = document.getElementById("result");
  output.textContent = result;
  // console.log(result);
}
