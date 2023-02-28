import { preloadImages } from "./utils";
import { Grid } from "./grid";

document.addEventListener("mousemove", function (event) {
  var customCursor = document.querySelector(".custom-cursor");
  customCursor.style.left = event.clientX - 50 + "px";
  customCursor.style.top = event.clientY - 50 + "px";
});

// Get the element that will grow on hover
var growOnHoverElement = document.querySelectorAll(".column__item-imgwrap");

// Add a mouseover event listener to the element
growOnHoverElement.forEach((element) => {
  element.addEventListener("mouseover", function (event) {
    // Update the size of the custom cursor element
    var customCursor = document.querySelector(".custom-cursor img");
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
        // check if the mouse is inside the element's boundaries
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          customCursor.style.width = "100px";
          customCursor.style.height = "100px";
          svg.style.left = `${x}px`;
          svg.style.top = `${y}px`;
        } else {
          customCursor.style.width = "40px";
          customCursor.style.height = "40px";
        }
  });
  element.addEventListener("mouseout", function () {
    // Reset the size of the custom cursor element
    var customCursor = document.querySelector(".custom-cursor img");
    customCursor.style.width = "40px";
    customCursor.style.height = "40px";
  });
});

var overlayOnHoverElement = document.getElementById("overlay");
overlayOnHoverElement.addEventListener("mouseover", function (event) {
    // Update the size of the custom cursor element
    var customCursor = document.querySelector(".custom-cursor img");
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
        // check if the mouse is inside the element's boundaries
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          customCursor.style.width = "100px";
          customCursor.style.height = "100px";
          svg.style.left = `${x}px`;
          svg.style.top = `${y}px`;
        } else {
          customCursor.style.width = "40px";
          customCursor.style.height = "40px";
        }
  });
  overlayOnHoverElement.addEventListener("mouseout", function () {
    // Reset the size of the custom cursor element
    var customCursor = document.querySelector(".custom-cursor img");
    customCursor.style.width = "40px";
    customCursor.style.height = "40px";
  });

function removeFadeOut(el, speed) {
  var seconds = speed / 1000;
  el.style.transition = "opacity " + seconds + "s ease";

  el.style.opacity = 0;
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, speed);
}

// Preload images and initialize the grid after a 2 second delay
setTimeout(() => {
  preloadImages(".column__item-img").then(() => {
    // Hide the loader
    document.getElementById("loader").classList.remove("loading");
    removeFadeOut(document.getElementById("loader"), 2000);

    // Initialize the grid
    new Grid(document.querySelector(".columns"));
  });
}, 2000); // delay of 2000 milliseconds (2 seconds)
