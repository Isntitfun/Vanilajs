alert("hi");
2 + 2;
2 + 1.5;
1.5 + 1.5;
("apple");
("apple killer");
"apple" + " killer";
"apple" + " killer" + 3;
"apple" + " killer" + 3.5;

// Console.log

console.log(2 + 2);
console.log(2 + 1.5);
console.log(1.5 + 1.5);
console.log("apple");
console.log("apple killer");
console.log("apple" + " killer");
console.log("apple" + " killer" + 3);
console.log("apple" + " killer" + 3.5);

// Const / Let / Var

const a = 10;
const b = 2;
const text = "Hidden ";
const myName = "SH";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(text + myName);

console.log("LET");

let C = "Always const ";
let L = "Sometimes let ";
let V = "Never var";

console.log(C + L + V);

C = "Never const ";
L = "Always or Never let ";
V = "Always var";

console.log(C + L + V);

console.log("VAR");

var cs = "Always const ";
var lt = "Sometimes let ";
var vr = "Never var";

console.log(cs + lt + vr);

cs = "Never const";
lt = "Always or Never let";
vr = "Always var";

console.log(cs + lt + vr);

var cs = "Never const";
var lt = "Always or Never let";
var vr = "Always var";

console.log(cs + lt + vr);

console.log("CONST");

const c = "Always const ";
const l = "Sometimes let ";
const v = "Never var";

console.log(c + l + v);

// Booleans

const t = true;
const f = false;
const n = null;
const u = console.log(t);
console.log(f);
console.log(n);
console.log(u);

console.log("TRUE = the Variable EXISTS and it is defined as TRUE");
console.log("FALSE = the Variable EXISTS and it is defined as FALSE");
console.log("NULL = the Variable EXISTS and it is defined as NOTHING");
console.log("UNDEFINED = the Variable EXISTS but it is NOT DEFINED");

// Array

const weekday = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

console.log(weekday[6]);
console.log(weekday[7]);

weekday.push("X");

console.log(weekday[7]);

// Object

const user = {
  name: "brian",
  job: "tagger",
  credibility: "96%",
  balance: 130000,
};

console.log(user);
console.log(user.name);

user.balance = user.balance - 70000;

user.identeActive = true;

console.log(user);

// object Experiment

const fruit = {
  type: ["apple", "lemon", "orange"],
  color: "yellow",
};

console.log(fruit);
console.log(fruit.type[0]);

// function

function sayHello() {
  console.log("Hello my name is");
}

sayHello();
sayHello();
sayHello();

function wink() {
  console.log("^ 3 *");
}

wink();
wink();
wink();

// function 2

function sayHello(name, age) {
  console.log("Helllo my name is " + name + " and I'm " + age);
}

sayHello("SH", 1);

// making calculator using function

function addition(x1, x2, x3) {
  console.log(x1 + x2 + x3);
}

function subtraction(x1, x2, x3) {
  console.log(x1 - x2 - x3);
}

function multiplication(x1, x2, x3) {
  console.log(x1 * x2 * x3);
}

function division(x1, x2, x3) {
  console.log(x1 / x2 / x3);
}

addition(1, 2, 3);
subtraction(1, 2, 3);
multiplication(1, 2, 3);
division(1, 2, 3);

// making object using function

const elon = {
  age: 31,
  mf: "male",
  home: "California",
  bark: function (status) {
    console.log("Elon : woof! wooooof! wof! woof!" + " (" + status + ")");
  },
};
console.log(elon);

console.log(elon.age);

elon.bark("fiercely");
elon.bark("mildly");

// Example

const calculator = {
  add: function (x1, x2) {
    console.log(x1 + x2);
  },
  subtract: function (x1, x2) {
    console.log(x1 - x2);
  },
  divide: function (x1, x2) {
    console.log(x1 / x2);
  },
  power: function (x1, x2) {
    console.log(x1 ** x2);
  },
};

calculator.add(2, 2);
calculator.subtract(2, 2);
calculator.divide(2, 2);
calculator.power(2, 2);
