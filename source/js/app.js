'use strict';

ymaps.ready(init);
var myMap;

function init() {     
  myMap = new ymaps.Map("map", {
      center: [55.02378694, 82.90917014],
      zoom: 15
  });

  myMap.behaviors.disable('scrollZoom');
}