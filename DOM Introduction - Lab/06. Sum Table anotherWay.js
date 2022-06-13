function sumTable() {
  let costElements = Array.from(
    document.querySelectorAll("td:nth-of-type(2)")
  ).slice(0, -1);

 costElements= costElements.reduce((a, b) => {
      let current = Number(b.textContent);
    return a + current;
  }, 0);
  let sum = document.getElementById("sum");
  sum.textContent = costElements;
  
}
