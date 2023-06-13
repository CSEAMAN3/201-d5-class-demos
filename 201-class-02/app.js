"use strict";
console.log("yadda yadda yadda");

// confirm either returns true or false
let answer1 = confirm("Are you ready to rumble?");
console.log(answer1);

// just setting the condition to answer1 checks if answer1 is truthy / true
if (answer1) {
  console.log("Lets get ready to rumble");
} else {
  console.log("jab, jab, right hook");
}

// boolean variables
let first = false;
let second = false;
let third = true;

// When we use the && (and) logical operator both conditions must be true.
// When we use the || (or) logical operator only one of the conditions has to be true.

if (first && third) {
  console.log("first and third were both true");
} else if (first || second) {
  console.log("first or second was true");
} else if (third) {
  console.log("first and second was false, but third was true");
} else {
  console.log("were any of the variables true?");
}

let color = prompt("what is your fav color?");

// Switch Statment
// When javascript reaches a break keyword, it breaks out of the switch block
// This will stop the execution inside the switch block
// It is not neccessary to break the last case in a switch block the block breaks (ends) there anyway.

// The switch expression is evaluated once.
// the value of the expression is compared witht the values of each case
// if there is a match, the associated block of code is executed.
// if there is no match, the default block of code is executed

switch (color.toLowerCase()) {
  case "red":
    console.log("Your fav color is red");
    break;
  case "blue":
    console.log("your fav color is blue");
    break;
  default:
    console.log("No idea what that color is!!!");
}
