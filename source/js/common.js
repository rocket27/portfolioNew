'use strict';

document.addEventListener('DOMContentLoaded', function() {
  
  let menuTrigger = document.querySelector('.hamburger'),
    navi = document.querySelector('.navi');

  if (menuTrigger && navi) {
    menuTrigger.addEventListener('click', function(e) {

      e.preventDefault();

      if (navi.classList.contains('navi_active')) {
        navi.classList.remove('navi_active');
  
        document.onmousewheel = document.onwheel = function() { 
          return true;
        };
  
      } else {
        navi.classList.add('navi_active');
        
        document.onmousewheel = document.onwheel = function() { 
          return false;
        };
      }
    }) 
  }
});