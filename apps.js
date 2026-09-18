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

function showDescription1() {
    let description1 = "Tunnel View offers a stunning perspective of the valley and surrounding peaks. This photo captures El Capitan, Half Dome, and Bridalveil Fall. Sunset is the ideal time to visit this spot.";
    document.getElementById("Description1").textContent = description1;
}

document.getElementById("tunnelviewdescription-button").addEventListener("click", showDescription1);

function showDescription2() {
    let description2 = "Cook's Meadow is a beautiful area with great views of Half Dome, featured in this photo. It should be noted that Half Dome is far away and is best captured with a lens that can zoom in. This photo was taken with a focal length of 42mm.";
    document.getElementById("Description2").textContent = description2;
}

document.getElementById("cooksmeadowdescription-button").addEventListener("click", showDescription2);

function showDescription3() {
    let description3 = "Lower Yosemite Fall Vista Point provides a close-up view of the waterfall tumbling down the granite cliffs. This is a great spot to get a photo of yourself with Lower Yosemite Fall in the background.";
    document.getElementById("Description3").textContent = description3;
}

document.getElementById("loweryosemitefalldescription-button").addEventListener("click", showDescription3);
