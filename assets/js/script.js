'use strict';

/**
 * PRELOAD
 * 
 * loading will be end after document is loaded 
 */

const preloader = document.querySelector('.preload')

window.addEventListener('load', function() {
  preloader.classList.add('loaded')
  // document.body.classList.add('loaded')
})