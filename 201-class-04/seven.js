const locations = ["norwich", "cambridge", "liverpool"];

for (let i = 5; i >= 0; i--) {
  let winner = false;
  console.log(winner);

  const attempts = i + 1;

  let city = prompt(
    "Name one the locations Tech Educators currently offer a coding bootcamp? You have " + attempts + " attempts"
  ).toLowerCase();

  for (let j = 0; j < locations.length; j++) {
    if (locations[j] === city) {
      // console.log("You win");
      alert("Well done " + locations[j] + " is a correct answer!");
      winner = !winner;
      console.log(winner);
      break;
    }
  }

  if (!winner) {
    alert("Unfortunately " + city + " is not a correct answer!");
  }

  if (i === 0 || winner) {
    alert("Tech Ed currently offer bootcamps in Norwich, Cambridge and Liverpool");
    break;
  }
}

("The sum of 4 and 7 is 11.");

function myFunc(a, b) {
  let mySum = a + b;
  let message = "The sum of " + 4 + " and " + 7 + " is " + 11 + ".";
  return [mySum, message];
}

function myFunc2() {
  let sum = myFunc(5, 5)[0];
  console.log(sum);
}

10;

// myFunc(4, 7)

// const myArr = ["dog", "cat", "pig"]

// console.log(myArr[3])
