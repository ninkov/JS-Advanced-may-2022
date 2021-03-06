function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let inputField = document.getElementById("searchField");
  let rows = Array.from(document.querySelectorAll("tbody tr"));
  
  function onClick() {
    for (const line of rows) {
      line.classList.remove('select');
      if (inputField.value != "" && line.innerHTML.includes(inputField.value)) {//we can use line.textContent it's same
      line.className='select';
      }
    }
    inputField.value='';
  }
}
