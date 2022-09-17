const btn = document.querySelector("button");
const body = document.querySelector("body");
const html = document.querySelector("html");

function mouseOn() {
  btn.style.backgroundColor = "black";
  btn.style.color = "white";
  btn.innerText = "Mouse is here!";
}

function mouseOut() {
  btn.style.backgroundColor = "silver";
  btn.innerText = "?";
}

btn.addEventListener("mouseover", mouseOn);
btn.addEventListener("mouseout", mouseOut);

function scrolled() {
  document.body.style.backgroundColor = "white";
}

document.addEventListener("scroll", scrolled);

function fs() {
  document.body.style.backgroundColor = "white";
}

html.addEventListener("fullscreenchange", fs);

function drag() {
  btn.style.backgroundColor = "green";
}

btn.addEventListener("dragstart", drag);

function rs() {
  document.body.style.backgroundColor = "white";
}

window.addEventListener("resize", rs);
