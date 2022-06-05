function addItem() {
    //select input fielt and read value
    const content = document.getElementById('newItemText').value;
    //create <li> element
    const liElement = document.createElement('li');
    //assingn input value to element text content
    liElement.textContent=content;
  //select <ul> and append new element
  const ulElement = document.getElementById('items');
  ulElement.appendChild(liElement);
  //select input field and clean contents value
  document.getElementById('newItemText').value='';

}
