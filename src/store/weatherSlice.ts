import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeatherData, ForecastData } from '../interfaces/weather';

interface WeatherState {
    data: WeatherData | null;
    forecast: ForecastData | null;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    data: null,
    forecast: null,
    loading: false,
    error: null,
};


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=bn`
        );
        return response.data as WeatherData;
    }
);


export const fetchForecast = createAsyncThunk(
    'weather/fetchForecast',
    async (city: string) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=bn`
        );
        return response.data as ForecastData;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Weather
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Server Problem';
            })

            // Forecast
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.forecast = action.payload;
            });
    },
});

export default weatherSlice.reducer;
