function addItem() {
    //	Your function should take the values of newItemText and newItemValue
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const select = document.getElementById('menu');
    //After that, you should create a new option element and set its textContent and its value to the newly taken ones. 
    const optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;
    //•	Once you have done all of that, you should append the newly created option as a child to the select item with id "menu".
    if (newItemText.value != '' && newItemValue.value != '') {
        select.appendChild(optionElement);
    }
    //•	Finally, you should clear the value of the two input fields.    
    newItemText.value = '';
    newItemValue.value = '';

}
