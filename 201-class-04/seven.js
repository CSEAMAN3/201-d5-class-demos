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
