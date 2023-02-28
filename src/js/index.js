import { preloadImages } from './utils';
import { Grid } from './grid';

function removeFadeOut( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
  setTimeout(function() {
      el.parentNode.removeChild(el);
  }, speed);
}

// Preload images and initialize the grid after a 2 second delay
setTimeout(() => {
  preloadImages('.column__item-img').then(() => {
    // Hide the loader
    document.getElementById("loader").classList.remove('loading');
    removeFadeOut(document.getElementById('loader'), 2000);

    // Initialize the grid
    new Grid(document.querySelector('.columns'));
  });
}, 2000); // delay of 2000 milliseconds (2 seconds)