function solve() {
  let inputData = [...document.querySelectorAll("textarea")];
  let buttons = [...document.querySelectorAll("button")];

  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", bay);

  function generate(event) {
    let funitureLists = JSON.parse(inputData[0].value);

    funitureLists.forEach((element) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = element.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      let p1 = document.createElement("p");
      p1.textContent = element.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.textContent = Number(element.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.textContent = Number(element.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector("tbody").appendChild(tr);
    });
  }
  function bay(event) {
    let checkboxes = Array.from(
      document.querySelectorAll("tbody input")
    ).filter((check) => check.checked);

    let bought = [];
    let price = 0;
    let decoration = 0;

    checkboxes.forEach((chB) => {
      //get all row
      let parent = chB.parentElement.parentElement;
      //get data rows
      let data = Array.from(parent.querySelectorAll("p"));
      //get furniture name element
      bought.push(data[0].textContent);
      //get al price
      price += Number(data[1].textContent);
      //get decoration factor
      decoration += Number(data[2].textContent);
    });
    //get output
    let output = document.querySelectorAll('textarea')[1];
    output.textContent+=`Bought furniture: ${bought.join(', ')}\r\n`;
    output.textContent+=`Total price: ${price.toFixed(2)}\r\n`;
    output.textContent+=`Average decoration factor: ${decoration/checkboxes.length}`
  }
}
