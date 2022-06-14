function search() {
  let inputText = document.querySelector("#searchText").value;
  let allMatch = Array.from(document.querySelectorAll("#towns li"));
  let match = document.getElementById("result");
  let count = 0;

  for (const line of allMatch) {
    if (line.textContent.includes(inputText) && inputText != "") {
      line.style.fontWeight = "bold";
      line.style.textDecoration = "underline";
      count++;
    } else {
      line.style = "";
    }
  }
  if (count != 0) {
    match.textContent = `${count} matches found`;
  } else {
    match.textContent = `matches found`;
  }
}
