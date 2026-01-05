import React from "react";
import {useWeather} from "../contexts/weatherContext.jsx";
const Card = () => {
  const { data } = useWeather();
  return (
    data &&
    <main className="bg-zinc-900 text-white rounded-lg shadow-md p-4 border-2 border-zinc-700 space-y-2 w-md">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">{data?.current?.condition?.text}</h2>
        <img src={data?.current?.condition?.icon} alt="Weather Icon" className="mx-auto mb-2" />
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">

          {/* LOCATION */}
          <div className="border border-zinc-600 rounded-lg p-4 bg-zinc-900 space-y-1">
            <h3 className="font-semibold text-lg text-center text-zinc-300">LOCATION</h3>
            <div className="border border-zinc-700"></div>
            <ul className="space-y-1 text-sm">
              <li><span className="text-zinc-300">City: </span><span className="text-zinc-500">{data?.location?.name}</span></li>
              <li><span className="text-zinc-300">Country: </span><span className="text-zinc-500">{data?.location?.country}</span></li>
              <li><span className="text-zinc-300">Latitude: </span><span className="text-zinc-500">{data?.location?.lat}</span></li>
              <li><span className="text-zinc-300">Longitude: </span><span className="text-zinc-500">{data?.location?.lon}</span></li>
              <li><span className="text-zinc-300">Local Time: </span><span className="text-zinc-500">{data?.location?.localtime}</span></li>
            </ul>
          </div>

          {/* WEATHER */}
          <div className="border border-zinc-600 rounded-lg p-4 bg-zinc-900 space-y-1">
            <h3 className="font-semibold text-lg text-center text-zinc-300">WEATHER</h3>
            <div className="border border-zinc-700"></div>
            <ul className="space-y-1 text-sm">
              <li><span className="text-zinc-300">Cloud: </span><span className="text-zinc-500">{data?.current?.cloud}</span></li>
              <li><span className="text-zinc-300">Temperature: </span><span className="text-zinc-500">{data?.current?.temp_c}°C</span></li>
              <li><span className="text-zinc-300">Humidity: </span><span className="text-zinc-500">{data?.current?.humidity}%</span></li>
              <li><span className="text-zinc-300">Pressure: </span><span className="text-zinc-500">{data?.current?.pressure_mb} mb</span></li>
              <li><span className="text-zinc-300">Wind Speed: </span><span className="text-zinc-500">{data?.current?.wind_kph} kph</span></li>
            </ul>
          </div>

        </div>
      </div>

      </main>
    );
};
export default Card;