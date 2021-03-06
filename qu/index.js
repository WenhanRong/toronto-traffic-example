const Intersections = require('./intersections');
const { loadCSVData } = require('./csv-loader');

// For debugging purposes, all functions are available here...
const Intersection = require('./intersection');
const CameraViews = require('./camera-views');
const Location = require('./location');

// TODO: You can try working with your functions/objects
// here, to make development easier.  Eventually we'll
// write our main program here.

let csvData = loadCSVData();
if(csvData) {
  const intersections = new Intersections(csvData);
  const streets = intersections.streets();
  const nav = document.querySelector('nav');
  streets.forEach(function(street) {
    let div = document.createElement('div');
    div.innerHTML = street;
    nav.appendChild(div);
    div.classList.add("menu-item");
    div.title = street;
  });
  console.log(intersections);
}
