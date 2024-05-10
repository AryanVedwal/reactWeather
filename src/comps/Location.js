import React, { useState } from "react";
import { Search, Map } from "./Svg";

export default function Location({ onSearch, weather, bg }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="lg:h-screen lg:w-[65%] w-full flex flex-col items-center justify-center gap-1 lg:p-2">
      {/* Location */}
      <div className=" bg-[#20202020] w-full min-h-[70vh] lg:h-[70vh] lg:rounded-xl flex flex-col justify-start gap-4 lg:gap-0 lg:justify-between p-4 relative overflow-hidden">
        <img
          src={`${bg()}`}
          className="object-cover absolute inset-0 z-10 opacity-80"
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col gap-4 relative z-20">
          <div className="flex justify-center sm:justify-start h-[50px] sm:h-[70px]">
            <input
              type="text"
              placeholder="Enter Location"
              pattern="[A-Za-z]+"
              title="Please enter letters only"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-b outline-none px-4 py-2 h-full w-full lg:w-[400px] placeholder:text-white placeholder:font-semibold font-semibold"
            />

            <button
              onClick={handleSearch}
              className="text-black h-full aspect-square cursor-pointer flex items-center justify-center hover:bg-[#ffffff50] duration-200"
            >
              <Search size={30} />
            </button>
          </div>

          {weather && weather.city && (
            <h1 className="p-1 flex items-center gap-[1ch] justify-center lg:justify-start relative z-20">
              <Map /> {weather.city.name}, {weather.city.country}
            </h1>
          )}
        </div>
        {weather && weather.list && (
          <div
            className="flex flex-col gap-4 py-2 px-4 bg-[#ffffff05] z-20"
            style={{
              backdropFilter: "blur(2.5px)",
            }}
          >
            <div className="flex flex-col lg:flex-row items-center text-center ">
              <p className="text-5xl lg:text-7xl capitalize">
                {weather.list[0].weather
                  ? weather.list[0].weather[0].description
                  : ""}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${
                  weather.list[0].weather ? weather.list[0].weather[0].icon : ""
                }@2x.png`}
                alt=""
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center lg:text-left">
              <h2>
                Humidity <br />{" "}
                {weather.list[0].weather
                  ? weather.list[0].main.humidity + "%"
                  : ""}
              </h2>
              <h2>
                Wind Speed <br />
                {weather.list[0].weather
                  ? weather.list[0].wind.speed + " m/s"
                  : ""}
              </h2>
              <h2>
                Visibility <br />
                {weather.list[0].weather
                  ? weather.list[0].visibility / 1000 + " km"
                  : ""}
              </h2>
              <h2>
                Pressure <br />
                {weather.list[0].weather
                  ? weather.list[0].main.pressure + " hPa"
                  : ""}
              </h2>
            </div>
          </div>
        )}
        {!weather.list && (
          <div className="flex items-center justify-center p-8 h-full w-full relative z-20">
            No Search Made Yet
          </div>
        )}
      </div>

      {/* Location */}
    </div>
  );
}
