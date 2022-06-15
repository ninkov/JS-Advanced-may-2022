function deleteByEmail() {
  //select input field and read value
  const inputValue = document.querySelector('input[name="email"]').value;

  const rows = [...document.querySelectorAll("tbody tr")];
  //repeat for every table row
  // -- select second column
  // -- compare text content with input value
  // -- if they are equal - remove current row
  let found = false;
  for (const row of rows) {
    if (row.children[1].textContent == inputValue) {
      const parent = row.parentElement;
      parent.removeChild(row);
      found = true;
    }
  }

  //display result
  if (found) {
    document.getElementById("result").textContent = "Deleted.";
  } else {
    document.getElementById("result").textContent = "Not found.";
  }
  //same way --> document.getElementById('result).textContent = found ? 'Deleted.' : 'Not found.'
}
