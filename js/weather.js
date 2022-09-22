const tempElement = document.querySelector(".temperature-value p");

// App data
const weather = {};
weather.temperature = {
  unit: "standard",
};

// Change to 'F' for Fahrenheit
var tempUnit = "F";

const KELVIN = 273.15;
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = "44ed2c56b6ef61f9e2942f4fa9bb83d1";

// Set Position function
setPosition();

function setPosition(position) {
  // Here you can change your position
  // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
  let latitude = 41.661129;
  let longitude = -91.530167;

  getWeather(latitude, longitude);
}

// Get the Weather data
function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=41.661129&lon=${longitude}&appid=${key}`;
  //https://api.openweathermap.org/data/2.5/weather?lat=41.661129&lon=-91.530167&appid=44ed2c56b6ef61f9e2942f4fa9bb83d1

  console.log(api);

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      let celsius = Math.floor(data.main.temp - KELVIN);
      weather.temperature.value =
        tempUnit == "C" ? celsius : (celsius * 9) / 5 + 32;
      weather.temperature.value
    })
    .then(function () {
      displayWeather();
    });
}

// Display Weather info
function displayWeather() {
  tempElement.innerHTML = `${Math.round(weather.temperature.value)}°<span class="darkfg">${tempUnit}</span>`;
}
