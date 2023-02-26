import { preloadImages } from './utils';
import { Grid } from './grid';


// Preload images and initialize the grid after a 2 second delay
setTimeout(() => {
  preloadImages('.column__item-img').then(() => {
    // Hide the loader
    document.body.classList.remove('loading');
    document.body.classList.add('fadeloading');

    const img = document.querySelector('.loader-img');
    img.parentNode.removeChild(img);
    // Initialize the grid
    new Grid(document.querySelector('.columns'));
  });
}, 2000); // delay of 2000 milliseconds (2 seconds)