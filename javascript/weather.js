function getGeoFail() {
  alert("Unable to get location.");
}

function getGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "37d4fa6a5ec81e3393fee85fccdd6925";
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`;
  fetch(url);
}

navigator.geolocation.getCurrentPosition(getGeoOk, getGeoFail);
