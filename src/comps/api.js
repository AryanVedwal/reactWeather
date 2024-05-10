export const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching weather data: ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Invalid response format: expected JSON");
  }

  return response.json();
};
