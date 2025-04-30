import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherByCity = async (city: string) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=bn`
    );
    return response.data;
};

export const fetchForecastByCity = async (city: string) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=bn`
    );
    return response.data;
};
