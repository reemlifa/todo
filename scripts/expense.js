document.getElementById("addRow").addEventListener("click", addRow);

function addRow() {
  let date = document.getElementById("date").value;
  let text = document.getElementById("text").value;
  let amount = document.getElementById("amount").value;
  let button = document.getElementById("delete");
  button.innerHTML = "X";

  let tableBody = document.querySelector("#table");

  let tableRow = document.createElement("tr");

  let dateCell = document.createElement("td");
  let textCell = document.createElement("td");
  let amountCell = document.createElement("td");
  let deleteCell = document.createElement("td");

  tableRow.appendChild(dateCell);
  tableRow.appendChild(textCell);
  tableRow.appendChild(amountCell);

  button.addEventListener("click", function () {
    tr.remove();
  });
}
