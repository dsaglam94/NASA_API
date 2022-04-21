 // making the map
 const issMap = L.map('issMap').setView([0, 0], 3);
 const attribution =
 '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
 const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
 const tiles = L.tileLayer(tileUrl, { attribution });
 tiles.addTo(issMap);

 // making a tile icon
 const issIcon = L.icon({
     iconUrl: './src/ISS/ISS_img.png',
     iconSize: [50, 32],
     iconAnchor: [25, 16]
  });
 let marker = L.marker([0, 0], {icon: issIcon}).addTo(issMap);
 const url = 'https://api.wheretheiss.at/v1/satellites/25544';

 async function getISS() {

     const response = await fetch(url);
     const data = await response.json();
     // destructing
     const { latitude, longitude } = data;

     marker.setLatLng([latitude, longitude]);
     marker.setLatLng([latitude, longitude]);
     issMap.setView([latitude, longitude], issMap.getZoom());

     document.getElementById('long').textContent = longitude.toFixed(2);
     document.getElementById('lat').textContent = latitude.toFixed(2);
 }
 
 getISS();

 setInterval(getISS, 2000)



