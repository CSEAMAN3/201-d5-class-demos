// starting code - strict to prevent errors console log to check link
"use strict";
console.log("like a boss");

// this is where we place any of the elements we're selecting from DOM
const storeTable = document.getElementById("store-table");
const newStoreForm = document.getElementById("new-store-form");

// array of store opening hours used to loop through and table header row
const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// empty array to push new stores into when created
const allStores = [];

// function to generate a random number - used to populate customersEachHour array in the constructor
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// constructor function - used to create new store objects
function CookieStore(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.pushStore();
  this.render();
}

// prototype method used to populate the customersEachHour array
CookieStore.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
  }
};

//prototype method used to populate cookiesEachHour array
CookieStore.prototype.calcCookiesEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

// prototype method used to push a new instance of CookieStore into the allStores array as it is created
CookieStore.prototype.pushStore = function () {
  allStores.push(this);
};

// prototype method used to render new instance of a store into the table
// steps
// invokes the calcCustomersEachHour / calcCookiesEachHour methods
// creates the table row and first table header cell with content
// create a for loop that loops through for every hour, creates a table data cell and sets the content to the cookies sold for that hour, appends each table data cell to the table row
// create a table header cell to display totalDailyCookies append to table row
// append the table row to the table

CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = this.storeName;
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }

  const storeTotal = document.createElement("th");
  storeTotal.textContent = this.totalDailyCookies;
  tr.appendChild(storeTotal);

  storeTable.appendChild(tr);
};

// create a function to render the hour row at the top of the table
// create the table row and table header cells
// loop through hours, create a table header cell, set content to hours[i] append to the table row
// create a table header, set the content to store totals, append to table row, append table row to storeTable
//invoke the hours row

function hoursRow() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Store Location";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  const storeTotalsHeaderCell = document.createElement("th");
  storeTotalsHeaderCell.textContent = "Store Totals";
  tr.appendChild(storeTotalsHeaderCell);
  storeTable.appendChild(tr);
}

hoursRow();

// create new instance of the CookieStore

const seattle = new CookieStore("seattle", 23, 65, 6.3);
const tokyo = new CookieStore("tokyo", 3, 24, 1.2);
const dubia = new CookieStore("dubia", 11, 38, 2.3);
const paris = new CookieStore("paris", 20, 38, 2.3);
const lima = new CookieStore("lima", 2, 16, 4.6);

// create the hourly totals row
// steps
// create the function declaration
// create a table row
// create a table header cell, set the text content to hourly totals
// append the table header to the table row
// create a for loop to loop through the number of hours the store is open
// create a table header to hold the total number of each stores for the hour
// declare a variable to store all the store hourly cookie count added together. Initialise the variable with a value of 0
// create a for loop inside the loop to loop through the allStores array
// declare a variable that stores each stores specific hourly cookies
// add the hourAmount to hoursAdded, use += to add to the new number everytime.
// set the content of the table header to the hoursAdded, append to the table row
// declare a variable to total all the hourly totals initialise as 0
// create a for loop to loop through allStores array and add all the total daily cookies to each other to get the overall total
// create a table header cell, set the content to the overall total, append to the table row.
// append the table row to the store table.

function hourlyTotals() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Hourly Totals";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    let hoursAdded = 0;
    for (let j = 0; j < allStores.length; j++) {
      const hourAmount = allStores[j].cookiesEachHour[i];
      hoursAdded += hourAmount;
    }
    th.textContent = hoursAdded;
    tr.appendChild(th);
  }

  let totalTotals = 0;
  for (let i = 0; i < allStores.length; i++) {
    totalTotals += allStores[i].totalDailyCookies;
  }

  const totalsCell = document.createElement("th");
  totalsCell.textContent = totalTotals;
  tr.appendChild(totalsCell);

  storeTable.appendChild(tr);
}
hourlyTotals();

// create an eventlistener for the form
// steps
// add the eventlistener to the form, name the event to listen for and run the function parsing the event as the parameter
// run event.preventDefault() method to prevent the dafault action of a form submit which refreshes the page
// set the innerHtml of the storeTable to an empty string this means the table on the page now has no content
// invoke the hoursRow function to populate the form with the table row of opening hours
// create a for loop to loop through the allStores array and invoke the render method on all the stores to populate the table with all the stores cookie sales
// declare variable and set the value to the input values that have been entered by the user
// create a new instance of a cookie store parsing the variables of input values as the arguments - this will be pushed into the allStores array and rendered when created due to the prototypes invoked in the constructor function
// invoke the hourlyTotals function to apply the hourly totals row into the table.

newStoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  storeTable.innerHTML = "";
  hoursRow();

  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }

  const storeNameInput = event.target.name.value;
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
  const avgCookiesInput = event.target.avgCookies.value;

  const store = new CookieStore(storeNameInput, minCustInput, maxCustInput, avgCookiesInput);

  hourlyTotals();
  newStoreForm.reset();
});
