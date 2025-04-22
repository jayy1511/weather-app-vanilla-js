// script/main.js
import { fetchWeather } from "./api.js";

const updateUI = (data) => {
  const {
    location: { name: city },
    current: {
      temp_c: temp,
      condition: { icon },
      wind_kph: wind,
      humidity,
      uv,
      feelslike_c: feelslike,
    },
  } = data;

  document.querySelector(".card-title").textContent = city;
  document.querySelector(".temp").textContent = `${temp} °C`;
  document.querySelector(".icon").src = icon;
  document.querySelector(".wind").textContent = `Wind: ${wind} kph`;
  document.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
  document.querySelector(".uv").textContent = `UV Index: ${uv}`;
  document.querySelector(".feelslike").textContent = `Feels like: ${feelslike} °C`;
};

(async () => {
  try {
    const weatherData = await fetchWeather(); // Uses default "Paris"
    updateUI(weatherData);
  } catch (error) {
    console.error("UI update failed:", error);
  }
})();
