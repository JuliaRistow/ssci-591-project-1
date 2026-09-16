const tunnelview = [37.7156111, -119.6769027];
const cooksmeadow = [37.7446481, -119.5935778];
const loweryosemitefall = [37.7499617, -119.5957417];

const map = L.map("map").setView(
  [37.7314485, -119.6128864],
  12
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(tunnelview).addTo(map).bindPopup("Tunnel View");
L.marker(cooksmeadow).addTo(map).bindPopup("Cook's Meadow");
L.marker(loweryosemitefall).addTo(map).bindPopup("Lower Yosemite Fall Vista Point");

const tunnelviewButton = document.getElementById("tunnelview-button");
const cooksmeadowButton = document.getElementById("cooksmeadow-button");
const loweryosemitefallButton = document.getElementById("loweryosemitefall-button");
const resetButton = document.getElementById("reset-button");
const statusText = document.getElementById("status");

tunnelviewButton.addEventListener("click", function() {
    map.flyTo(tunnelview, 18);
    statusText.textContent = "You are now at Tunnel View.";
});

/*L.marker(tunnelview).addTo(map)
    .bindPopup('Tunnel View')
    .openPopup();
*/
cooksmeadowButton.addEventListener("click", function() {
    map.flyTo(cooksmeadow, 18);
    statusText.textContent = "You are now at Cook's Meadow.";
});

loweryosemitefallButton.addEventListener("click", function() {
    map.flyTo(loweryosemitefall, 18);
    statusText.textContent = "You are now at Lower Yosemite Fall Vista Point.";
});

resetButton.addEventListener("click", function() {
    map.flyTo([37.7314485, -119.6128864], 12);
    statusText.textContent = "You are now at the default view. Click a button to visit the site of each photo.";
});

/* const tunnelview = [37.7156111, -119.6769027];
const cooksmeadow = [37.7446481, -119.5935778];
const loweryosemitefall = [37.7499617, -119.5957417];

const map = new L.map('map').setView([37.7314485, -119.6128864], 13);

const tiles = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = new L.Marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

tiles.on("tileerror", function (error) {
  console.error("Tile failed to load:", error);
});

tiles.addTo(map);

*/

/*var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


    const tiles = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
);

tiles.on("tileerror", function (error) {
  console.error("Tile failed to load:", error);
});

tiles.addTo(map);


const map = new L.Map('map').setView([51.505, -0.09], 13);

    const tiles = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map); 
    */