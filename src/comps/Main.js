import React, { useState } from "react";
import Weather from "./Weather";
import Location from "./Location";
import { getWeather } from "./api";

export default function Main() {
  const [weather, setWeather] = useState({});

  const fetchWeather = async (city) => {
    try {
      const weatherData = await getWeather(city);
      setWeather(weatherData);
      // console.log(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Can't Find City");
    }
  };

  const getBackgroundImage = () => {
    if (!weather.list) return "/Images/main.jpg";
    const weatherType = weather.list[0].weather[0].main.toLowerCase();
    if (weatherType.includes("cloud")) {
      return "/Images/clouds.jpg";
    } else if (weatherType.includes("rain")) {
      return "/Images/rain.jpg";
    } else if (weatherType.includes("clear")) {
      return "/Images/clear.jpg";
    } else if (weatherType.includes("snow")) {
      return "/Images/snow.jpg";
    } else {
      return "/Images/default.jpg";
    }
  };

  return (
    <div
      className="flex lg:flex-row flex-col lg:h-screen"
      style={{
        backgroundImage: `linear-gradient(90deg, #33333340, #33333340), url("/Images/back.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Location
        onSearch={fetchWeather}
        weather={weather}
        bg={getBackgroundImage}
      />
      <Weather weather={weather} onSearch={fetchWeather} />
    </div>
  );
}
