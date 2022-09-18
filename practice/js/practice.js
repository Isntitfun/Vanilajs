const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  alert("Please write your age in real positive numbers");
} else if (age < 18) {
  alert("You are too young");
} else if (age > 50 && age <= 80) {
  alert("You are too old");
} else if (age > 80) {
  alert("R.I.P");
} else {
  alert("Your age is " + age + ". Please press confirm if it is correct.");
}
