"use strict";

function initMap() {
  let loughborough = {lat: 52.772099, lng: -1.206166}; // set the latitude and longitude for the focal point of the map, loughborough town centre
  let home = {lat: 52.762296, lng: -1.215982}; //set the latitude and longitude for my house
  let work = {lat: 52.773290, lng: -1.209433}; //set the latitude and longitude for my work location
  let mapDemo = document.getElementById("map"); //get the map document


  let map = new google.maps.Map(mapDemo, { //initiate a google maps link
    zoom: 13, //setting the initial zoom level for the maps on initial loadup
    center: loughborough //declares the point of origin for the zoom to work around.
  });

  let markerHome = new google.maps.Marker({ //setting a marker for my home to display it on the map
    position: home, //locate the location based on the latitude and longitude
    map: map, // initiate the map
    title: 'home' //setting the name for the marker on the map
  });
  let markerWork = new google.maps.Marker({ //setting a marker for my work to display it on the map
    position: work, //locate the location based on the latitude and longitude
    map: map, //initiate the map
    title: 'work' //setting the name for the marker on the map
  });
}
