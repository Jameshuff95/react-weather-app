import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE } from "../utilities";
import { getWeatherData } from "../API";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);

            const current_weather = await getWeatherData (
                "current", place.place_id, "auto"
            );
            setCurrentWeather(current_weather.current);

            const hourly_forecast = await getWeatherData (
                "hourly", place.place_id, "auto"
            );
            setHourlyForecast(hourly_forecast.hourly.data);

            const daily_forecast = await getWeatherData (
                "daily", place.place_id, "auto"
            );
            setDailyForecast(daily_forecast.daily.data);

            setLoading(false);
        }
        _getWeatherData();
    }, [place]);

    return(
        <WeatherContext.Provider value={{ place, loading, currentWeather, hourlyForecast, dailyForecast }}>
            {children}
        </WeatherContext.Provider>
    );
}

export {WeatherProvider};

export default WeatherContext;
