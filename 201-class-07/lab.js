"use strict";
console.log("Script In Construction");

const container = document.getElementById("container");
const storeTable = document.getElementById("store-table");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookieStore(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  // this.calcCustomersEachHour();
  // this.calcCookiesEachHour();
  this.render();
}

CookieStore.prototype.calcCustomersEachHour = function () {
  // console.log("working");
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
  }
};

CookieStore.prototype.calcCookiesEachHour = function () {
  // this.calcCustomersEachHour();
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

  // create a table row
  const tr = document.createElement("tr");

  // create a table data cell
  const th = document.createElement("th");
  th.textContent = this.storeName;

  // append the table data to the table row
  tr.appendChild(th);

  // loop through cookiesEachHour - create a td for each index and append to tr
  for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }

  // create a th to display the totals and append to the tr
  const storeTotal = document.createElement("th");
  storeTotal.textContent = this.totalDailyCookies;
  tr.appendChild(storeTotal);

  // append the tr to the table - storeTable
  storeTable.appendChild(tr);
};

// test constructor works
const seattle = new CookieStore("seattle", 23, 65, 6.3);
const dubia = new CookieStore("dubia", 23, 65, 6.3);
console.log(seattle);

// set up file - use strict and clg check console on sales page.
// get the container element by its id store in a variable.
// create an hours array to store each opening hour.
// create the constructor function with the properties set to the parameters
// test the constructor function works by creating a new instance
// create a randomNum function to generate a random number taking in a min and max value
// Note: I have created this function above the constructor, cleaner and will be hoisted anyhow
// set up a prototype for calcCustomersEachHour
// test the prototype is working by invoking it inside the constructor and console logging a new instance
// remove the test from the constructor
// set up a prototype for calcCookiesEachHour
// test the prototype is working by invoking it inside the constructor and console logging a new instance
// note you will also need to invoke the calcCustomersEachHour for the calcCookiesEachHour to work
// set up a prototype for render - make sure it invokes calcCustomersEachHour and calcCookiesEachHour
// invoke the render function inside the constructor function
// inside the render prototype create a table row
// inside the render prototype create a table data
// set the text content of the td to the storeName
// append the td to the tr
// create a for loop that loops and creates a td that will append to the tr and list the cookiesEachHour index
// create a th for the totals and set the text content to this.totalDailyCookies
// append the tr to the table - storeTable
