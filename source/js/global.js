'use strict';

// document.addEventListener('DOMContentLoaded', function() {
//   let menuTrigger = document.getElementsByClassName('hamburger');

//   if (menuTrigger) {
//     menuTrigger[0].onclick = function(e) {
//       e.preventDefault();
      
//       let navigation = document.getElementsByClassName('navigation');

//       if (navigation[0].classList.contains('navigation_active')) {
//         navigation[0].classList.remove('navigation_active');

//         document.onmousewheel = document.onwheel = function() { 
//           return true;
//         };

//       } else {
//         navigation[0].classList.add('navigation_active');
        
//         document.onmousewheel = document.onwheel = function() { 
//           return false;
//         };
//       }
//     }
//   }
// });

$(document).ready(function() {
  let trigger = $('.hamburger'),
    navi = $('.navi');

  if (trigger && navi) {
    trigger.on('click', function(e) {
      e.preventDefault();

      if (navi.hasClass('navi_active')) {
        navi.removeClass('navi_active');
      } else {
        navi.addClass('navi_active');
      }
    });
  }

});

// ymaps.ready(init);
// var myMap,
//     myPlacemark;

// function init() {     
//   myMap = new ymaps.Map("map", {
//     center: [55.01413298, 82.92389704],
//     zoom: 17
//   });

//   myMap.behaviors.disable('scrollZoom');

//   myPlacemark = new ymaps.Placemark([55.01352878, 82.92876793], { 
//     hintContent: 'ул. Инская, д. 5', 
//     balloonContent: 'Офис 115' 
//   });

//   myMap.geoObjects.add(myPlacemark);
// }