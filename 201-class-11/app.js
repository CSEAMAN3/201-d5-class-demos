// const audio = document.querySelector("audio");
// audio.play();

const levees = document.getElementById("levees");
// levees.play();

document.getElementById("randomizer").addEventListener("click", function () {
  levees.volume = Math.random();
  console.log(levees.volume);
});
