const btn = document.querySelector("button");

function handleClickEvent() {
  if (
    btn.style.justifyContent === "flex-start" &&
    btn.style.alignItems === "flex-start"
  ) {
    (btn.style.justifyContent = "flex-end"),
      (btn.style.alignItems = "flex-start");
  } else if (
    btn.style.justifyContent === "flex-end" &&
    btn.style.alignItems === "flex-start"
  ) {
    btn.style.justifyContent = "flex-end";
    btn.style.alignItems = "flex-end";
  } else if (
    btn.style.justifyContent === "flex-end" &&
    btn.style.alignItems === "flex-end"
  ) {
    btn.style.justifyContent = "flex-start";
    btn.style.alignItems = "flex-end";
  } else {
    btn.style.justifyContent = "flex-start";
    btn.style.alignItems = "flex-start";
  }
}

function btnColor() {
  const btnCol = btn.style.color;
  const b1 = "btn1";
  const b2 = "btn2";
  const b3 = "btn3";
  if (btn.className === b1) {
    btn.className = b2;
  } else if (btn.className === b2) {
    btn.className = b3;
  } else if (btn.className === b3) {
    btn.className = b1;
  } else {
    btn.className = b1;
  }
}

btn.addEventListener("click", handleClickEvent);
btn.addEventListener("click", btnColor);

const titel = document.querySelector(".title");

function colorChange() {
  const currentColor = titel.style.color;
  let newcolor;
  if (currentColor === "blue") {
    newcolor = "tomato";
  } else {
    newcolor = "blue";
  }
  titel.style.color = newcolor;
}

titel.addEventListener("click", colorChange);
