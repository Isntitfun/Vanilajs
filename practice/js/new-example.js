console.log(document.querySelector(".box1"));
const box1 = document.querySelector(".box1");
console.log(box1.classList);

function move1() {
  const box1 = document.querySelector(".box1");
  const r = "r";
  const d = "d";
  const rd = "rd";

  if (box1.classList.contains(r)) {
    box1.classList.remove(r);
    box1.classList.add(rd);
  } else if (box1.classList.contains(rd)) {
    box1.classList.remove(rd);
    box1.classList.add(d);
  } else if (box1.classList.contains(d)) {
    box1.classList.remove(d);
  } else {
    box1.classList.add(r);
  }
}

function move2() {
  const box2 = document.querySelector(".box2");
  const l = "l";
  const d = "d";
  const ld = "ld";

  if (box2.classList.contains(d)) {
    box2.classList.remove(d);
    box2.classList.add(ld);
  } else if (box2.classList.contains(ld)) {
    box2.classList.remove(ld);
    box2.classList.add(l);
  } else if (box2.classList.contains(l)) {
    box2.classList.remove(l);
  } else {
    box2.classList.add(d);
  }
}

function move3() {
  const box3 = document.querySelector(".box3");
  const l = "l";
  const u = "u";
  const lu = "lu";

  if (box3.classList.contains(l)) {
    box3.classList.remove(l);
    box3.classList.add(lu);
  } else if (box3.classList.contains(lu)) {
    box3.classList.remove(lu);
    box3.classList.add(u);
  } else if (box3.classList.contains(u)) {
    box3.classList.remove(u);
  } else {
    box3.classList.add(l);
  }
}

function move4() {
  const box4 = document.querySelector(".box4");
  const r = "r";
  const u = "u";
  const ru = "ru";

  if (box4.classList.contains(u)) {
    box4.classList.remove(u);
    box4.classList.add(ru);
  } else if (box4.classList.contains(ru)) {
    box4.classList.remove(ru);
    box4.classList.add(r);
  } else if (box4.classList.contains(r)) {
    box4.classList.remove(r);
  } else {
    box4.classList.add(u);
  }
}

const mb = document.querySelector(".main-box");

mb.addEventListener("click", move1);
mb.addEventListener("click", move2);
mb.addEventListener("click", move3);
mb.addEventListener("click", move4);

function btnColor() {
  document.querySelector("button").classList.toggle("btnC");
}

document.querySelector("button").addEventListener("click", btnColor);
