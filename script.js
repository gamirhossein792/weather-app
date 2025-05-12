const apiKey = "8279dfd68d54fdd76b061f2e43b5c46a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchButton.addEventListener("click", function () {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      locationElement.innerText = data.name;
      temperature.innerText = `${data.main.temp} °C `;
      description.innerText = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
