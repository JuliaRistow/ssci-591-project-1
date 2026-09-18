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
