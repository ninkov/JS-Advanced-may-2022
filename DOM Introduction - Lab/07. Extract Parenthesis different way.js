function extract() {
  let targetContentElement = document.getElementById("content");
  let pattern = /\(([^\(]+)\)/g;
  let matches = targetContentElement.textContent.matchAll(pattern);
  let output = [];
  for (const match of matches) {
    output.push(match[1]);
  }
  console.log(output.join('; '));
}
