function getGeoFail() {
  alert("Unable to get location.");
}

function getGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`current geocoordinate is ${lat}, ${lng}`);
}

navigator.geolocation.getCurrentPosition(getGeoOk, getGeoFail);
