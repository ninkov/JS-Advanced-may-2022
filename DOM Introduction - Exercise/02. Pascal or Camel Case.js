function solve() {
  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  let result = "";
  //this is an example
  const words = input.split(/(\s+)/).filter((x) => x != " ");
  //console.log(words);

  if (convention == "Camel Case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
      if (i != 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
  } else if (convention == "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  } else {
    return (document.getElementById("result").textContent = "Error!");
  }
  result = words.join("");
  document.getElementById("result").textContent = result;
}
