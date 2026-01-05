import axios from "axios";
const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=b4feef859d7f4d898ca41428260501";   

export async function fetchWeatherData(city) {
    try {
        const response = await axios.get(`${BASE_URL}&q=${city}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}
