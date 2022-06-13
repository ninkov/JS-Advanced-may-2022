function sumTable() {
  let costElements = document.querySelectorAll("td:nth-of-type(2n)");
  costElements = Array.from(costElements).reduce((a, b) => {
      let currentValue = Number(b.textContent)||0
   return a + currentValue;
  }, 0);
  let sum = document.getElementById("sum");
  sum.textContent=costElements;
}
