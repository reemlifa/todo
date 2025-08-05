document.getElementById("submit").addEventListener("click", showItem);

function showItem() {
  let input = document.getElementById("inputtext").value;
  let listNode = document.getElementById("list");
  // creates an new html element
  let liNode = document.createElement("LI");
  // creates a new text node, this is how plain is represented in html
  // holds the input value and stores it as a text node
  let textNode = document.createTextNode(input);

  // takes the input from the text node and places it inside the linode
  liNode.appendChild(textNode);
  // this actually puts it inside the html body inside of the list ul
  listNode.appendChild(liNode);
}
