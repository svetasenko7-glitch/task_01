let lastname = document.getElementById("lastname").innerText;
let firstname = document.getElementById("firstname").innerText;
let year = document.getElementById("year").innerText;

console.log(lastname);
console.log(firstname);
console.log(year);




function translate_edit() {
  document.getElementById("my-lastname").innerText = "Senko";
  document.getElementById("my-firstname").innerText = "Svetlana";
  document.getElementById("my-year").innerText = "2000";
 document.getElementById("my-month").innerText = "January";
}

const node_for_click = document.getElementById("translate");
node_for_click.addEventListener("click", translate_edit);
