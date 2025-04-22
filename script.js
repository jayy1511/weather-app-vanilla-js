const API_KEY = "YOUR_API_KEY";
const cityLocation = "Paris";
const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityLocation}&aqi=yes`;

const fetchWeather = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    console.log(data);

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

  } catch (error) {
    console.error("Fetch error:", error);
  }
};

fetchWeather();
