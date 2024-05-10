import React, { useState } from "react";
import dateFormat from "dateformat";

export default function Weather({ weather }) {
  const [isC, setIsC] = useState(true);

  const todayDate = () => {
    let now = new Date();
    return dateFormat(now, "ddd, dS mmmm");
  };

  const currentTime = () => {
    let now = new Date();
    return dateFormat(now, "h:MM TT");
  };

  const dayOfWeek = (index) => {
    let now = new Date();
    now.setDate(now.getDate() + index);
    return dateFormat(now, "ddd , dS mmm");
  };

  const convertTemperature = (temp) => {
    return isC ? temp.toFixed(1) : ((temp * 9) / 5 + 32).toFixed(1);
  };

  return (
    <>
      {weather && weather.list && (
        <div
          className="lg:h-screen w-full lg:w-[35%] bg-[#ffffff10] px-3 flex flex-col gap-8 justify-between"
          style={{
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Current Weather */}
          <div className="border-b min-h-[35vh] lg:h-[35%] flex flex-col justify-between">
            <h1 className="h-[25%] flex items-center justify-between p-2">
              <span> {todayDate()} </span>
              <span>{currentTime()}</span>
            </h1>

            <div className="flex items-center justify-center text-7xl h-[50%] ">
              {convertTemperature(weather.list[0].main.temp, isC) + " °"}
            </div>

            <div className=" flex items-center justify-center gap-8 text-center h-[25%] pb-8">
              <h2> {weather.list ? weather.list[0].weather[0].main : ""} </h2>
            </div>
          </div>
          {/* Current Weather */}

          {/* Forecast */}
          <div className="min-h-[50vh] lg:h-[60%] flex flex-col gap-4 p-2">
            <h2 className="text-center lg:text-left"> Forecast </h2>

            {/* unit Change */}
            <div
              onClick={() => {
                setIsC(!isC);
              }}
              className="mx-auto w-[70%] max-w-[500px] min-w-[250px] h-[70px] p-2 flex items-center justify-center gap-4 rounded-full overflow-hidden unit-change cursor-pointer"
            >
              <div className=" text-2xl w-full h-full rounded-full flex items-center justify-center relative">
                <div
                  className="absolute inset-0 rounded-full bg-[#ffffff50] -z-10"
                  style={{
                    transform: !isC
                      ? "translateX(calc(100% + 1rem))"
                      : "translateX(0px)",

                    transition: "all 0.25s cubic-bezier(0.33, 1, 0.68, 1)",
                  }}
                ></div>
                &deg;C
              </div>
              <div className=" text-2xl w-full h-full rounded-full flex items-center justify-center">
                &deg;F
              </div>
            </div>
            {/* unit Change */}

            {/* Forecast Result */}
            <div className="h-full flex flex-col gap-1 p-2">
              {[...Array(4)].map((e, i) => (
                <div
                  className="bg-[#ffffff10] h-[110px] lg:h-[25%] flex items-center justify-between px-3 rounded-lg"
                  key={i}
                >
                  <div className="h-full w-full flex items-center gap-1">
                    <img
                      width={70}
                      src={`https://openweathermap.org/img/wn/${
                        weather.list[(i + 1) * 8].weather[0].icon
                      }@2x.png`}
                      alt=""
                    />
                    <div className="w-full h-full flex flex-col items-start justify-center">
                      <p>{dayOfWeek(i + 1)}</p>
                      <p className="capitalize">
                        {weather.list[(i + 1) * 8].weather[0].description}
                      </p>
                    </div>
                  </div>

                  <div className="border-l h-fit w-[75px] py-2 flex items-center justify-center">
                    {convertTemperature(
                      weather.list[(i + 1) * 8].main.temp,
                      isC
                    ) + " °"}
                  </div>
                </div>
              ))}
            </div>
            {/* Forecast Result */}
          </div>
          {/* Forecast */}
        </div>
      )}

      {!weather.list && (
        <div
          className=" h-[30vh] lg:h-screen w-full lg:w-[35%] bg-[#ffffff10] px-3 flex items-center justify-center"
          style={{
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </>
  );
}
