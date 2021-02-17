const custom = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/230399/basic-v8.json';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVwZXBwbGUiLCJhIjoiTmd4T0wyNCJ9.1-jWg2J5XmFfnBAhyrORmw';

map = new mapboxgl.Map({
   container: 'map', // container id
   style: 'mapbox://styles/mapbox/satellite-v8', //stylesheet location
   center: [-2.498647, 43.180], // starting position
   bearing: 28,
   zoom: 14, // starting zoom,
   pitch: 45
});

$("#fly").click(function(){
   moveTo(-37.814, 144.96332);                
})

function moveTo(lat, lon) {
   map.flyTo({
     center: [lon, lat],
     zoom: 14,
     speed: 0.5,
     curve: 0.8,
     easing: function(t) {
       return t;
     }
   });
}