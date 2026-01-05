import { createContext, useContext, useState } from "react";
import { fetchWeatherData } from "../api/weatherApi";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    async function fetchData(city) {
        setLoading(true);
        const data = await fetchWeatherData(city);
        console.log(data);
        setData(data);
        setLoading(false);
    }

    return (
      <WeatherContext.Provider value={{ data, setData, searchQuery, setSearchQuery, fetchData, loading }}>
          {children}
        </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};