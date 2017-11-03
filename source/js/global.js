'use strict';

ymaps.ready(init);
var myMap,
    myPlacemark;

function init() {     
  myMap = new ymaps.Map("map", {
    center: [55.01413298, 82.92389704],
    zoom: 17
  });

  myMap.behaviors.disable('scrollZoom');

  myPlacemark = new ymaps.Placemark([55.01352878, 82.92876793], { 
    hintContent: 'ул. Инская, д. 5', 
    balloonContent: 'Офис 115' 
  });

  myMap.geoObjects.add(myPlacemark);
}