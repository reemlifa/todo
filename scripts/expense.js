document.getElementById("addRow").addEventListener("click", addRow);

function addRow() {
  let date = document.getElementById("date").value;
  let text = document.getElementById("text").value;
  let amount = document.getElementById("amount").value;

  let tableBody = document.querySelector("#table");

  const HTML = `
    <tr>
      <td>${date}</td>
      <td>${text}</td>
      <td>${amount}</td>
    </tr>
`;

  tableBody.insertAdjacentHTML("beforeend", HTML);
}
