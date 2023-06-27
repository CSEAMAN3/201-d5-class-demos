"use strict";
console.log("Messi is the GOAT");

// global varaibles
// querySelector returns the first element in the document that matches
const goatContainer = document.querySelector("section");
const resultsButton = document.querySelector("section + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");

let clicks = 0;
const maxClicksAllowed = 9;

let allGoats = [];

function getRandomNumber() {
  return Math.floor(Math.random() * allGoats.length);
}

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  allGoats.push(this);
}

function renderGoats() {
  // we need to generate a number to reference the goat we want to render onto the page
  let goat1 = getRandomNumber();
  let goat2 = getRandomNumber();

  // how could we prevent goat1 being the same number a goat2?
  while (goat1 === goat2) {
    goat2 = getRandomNumber();
  }

  // now we have two random numbers lets set the attributes of our images in the document.
  image1.src = allGoats[goat1].src;
  image2.src = allGoats[goat2].src;
  image1.alt = allGoats[goat1].name;
  image2.alt = allGoats[goat2].name;
  allGoats[goat1].views++;
  allGoats[goat2].views++;
}

function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert("Please click on an image");
  } else {
    clicks++;
    // console.log(clicks);
    let clickedGoat = event.target.alt;
    for (let i = 0; i < allGoats.length; i++) {
      if (clickedGoat === allGoats[i].name) {
        allGoats[i].clicks++;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      goatContainer.removeEventListener("click", handleGoatClick);
      goatContainer.className = "no-voting";
      resultsButton.addEventListener("click", renderChart);
      resultsButton.className = "clicks-allowed";
    } else {
      renderGoats();
    }
  }
}

function renderResults() {
  // console.log("Your results are in!");
  let ul = document.querySelector("ul");
  for (let i = 0; i < allGoats.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and was clicked ${allGoats[i].clicks} times.`;
    ul.appendChild(li);
  }
}

const cruising = new Goat("Cruising Goat", "assets/images/cruisin-goat.jpg");
const float = new Goat("Float Your Goat", "assets/images/float-your-goat.jpg");
const hand = new Goat("Goat Out of Hand", "assets/images/goat-out-of-hand.jpg");
const kissing = new Goat("Kissing Goat", "assets/images/kissing-goat.jpg");
const sassy = new Goat("Sassy Goat", "assets/images/sassy-goat.jpg");
const smiling = new Goat("Smiling Goat", "assets/images/smiling-goat.jpg");
const sweater = new Goat("Sweater Goat", "assets/images/sweater-goat.jpg");
const away = new Goat("Goat Away", "assets/images/goat-away.jpg");

renderGoats();

goatContainer.addEventListener("click", handleGoatClick);

function renderChart() {
  const goatNames = [];
  const goatViews = [];
  const goatClicks = [];

  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatViews.push(allGoats[i].views);
    goatClicks.push(allGoats[i].clicks);
  }

  // console.log(goatNames);
  // console.log(goatViews);
  // console.log(goatClicks);

  const data = {
    labels: goatNames,
    datasets: [
      {
        label: "clicks",
        data: goatClicks,
        backgroundColor: ["#42032C"],
        borderColor: ["#D36B00"],
        borderWidth: 1,
      },
      {
        label: "views",
        data: goatViews,
        backgroundColor: ["#D36B00"],
        borderColor: ["#42032C"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
  };

  const goatChart = document.getElementById("chart");
  const myChart = new Chart(goatChart, config);
}
