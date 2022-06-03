function search() {
  let liElements = document.querySelectorAll("ul#towns li");
  let resultElement = document.getElementById("result");
  let searchText = document.getElementById("searchText").value;
  let matches = 0;

//   for (const element of liElements) {
//     element.style.fontWeight = "normal";
//     element.style.textDecoration ='';
//   }

  for (let element of liElements) {
    let text = element.textContent;
    if (text.match(searchText)) {
      matches++;
      element.style.fontWeight = "bold";
      element.style.textDecoration = "underline";
    }else{
        element.style.fontWeight = "normal";
    element.style.textDecoration ='';
    }
  }
  resultElement.textContent = `${matches} matches found`;
}
