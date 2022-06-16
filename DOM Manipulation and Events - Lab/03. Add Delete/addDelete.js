function addItem() {
  //select input fielt and read value
  let content = document.getElementById("newItemText");

  //create <li> element
  const liElement = document.createElement("li");

  //assingn input value to element text content
  liElement.textContent = content.value;
  //create [Delete] anchor
  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  liElement.appendChild(deleteBtn);
  deleteBtn.addEventListener('click',onDelete)
  //select <ul> and append new element
  const ulElement = document.getElementById("items");
  ulElement.appendChild(liElement);

  //select input field and clean contents value
  // document.getElementById("newItemText").value = "";
  content.value = "";
  function onDelete(event) {
      event.target.parentElement.remove();
  
  }
}
