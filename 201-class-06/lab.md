# Guidence for lab-06

- create a repository on Github named cookie-stand
- set this up with a README.md file not a licence
- Clone the repository to you local machine
- open the project in VSCode
- create:
  - index.html
  - sales.html
  - style.css
  - app.js
- enter the biolerplate code for the html files and link your style.css and app.js files
- in app.js

  - create an object literal named seattle
  - inside the object create key / value pairs for:

    - minCustPerHour
    - maxCustPerHour
    - avgCookiesPerCust
    - customersEachHour - set this to an array with elelment that store a number for each hour the store is open.
    - cookiesEachHour - set this to an array with elements that store a number for the cookies sold for each hour the store is open
    - totalDailyCookies - initialise this to number - the number is all your numbers from cookiesEachHour added together.

    Note: The properties above should have hard coded values at this stage.

  In your html file:

  - inside the body element nest a div and give it an id of container.

  In your app.js file:

  - at the top of the file declare a variable that get the div element by its id container

NOTE IMPORTANT: add a storeName property to your object as the first key / value pair and set the value to the name of your object. for example storeName: "seattle"

- create a render method inside your object that:
  - performs dom manipulation to create:
    - article - as a container
    - h3 - store title
    - ul for the list of hours and cookies sold
    - a loop to create each list item

Note: Your list items should read for example 6am: 16 cookies.  
Therefore you should declare a variable named hours at the top of app.js (outside of your object not inside your object). This should be eqaul to an array that stores strings for each hour the store is open. Example:

```javascript
const hours = ["6am", "7am", "8am",......ect]
```
