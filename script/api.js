// script/api.js
export const fetchWeather = async (city = "Paris") => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;
  
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
  