const b = document.querySelector(".box:nth-child(2) span");
const v = document.querySelector(".box:nth-child(3) span");
const p = document.querySelector(".box:nth-child(4) span");

function handleEventClickB() {
  b.style.color = "white";
  v.style.color = "black";
  p.style.color = "black";
}

function handleEventClickV() {
  b.style.color = "black";
  v.style.color = "white";
  p.style.color = "black";
}

function handleEventClickP() {
  b.style.color = "black";
  v.style.color = "black";
  p.style.color = "white";
}

b.addEventListener("click", handleEventClickB);
v.addEventListener("click", handleEventClickV);
p.addEventListener("click", handleEventClickP);

const title = document.querySelector(".title");

function clickTitle() {
  console.log("Titel!");
  alert("Titel!");
}

title.addEventListener("click", clickTitle);
