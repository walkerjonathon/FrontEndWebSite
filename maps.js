"use strict";

function initMap() {
  let loughborough = {lat: 52.772099, lng: -1.206166};
  let home = {lat: 52.762296, lng: -1.215982};
  let work = {lat: 52.773290, lng: -1.209433};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: loughborough
  });

  // these set different markers you want to show on your map
  let markerHome = new google.maps.Marker({
    position: home,
    map: map,
    title: 'home'
  });
  let markerWork = new google.maps.Marker({
    position: work,
    map: map,
    title: 'work'
  });
}