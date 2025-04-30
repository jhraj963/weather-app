import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const WeatherDisplay = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.weather);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-danger">{error}</p>;
    if (!data) return null;

    return (
        <div className="card mt-3 p-3">
            <h4>{data.name}</h4>
            <p>Temprature: {data.main.temp}°C</p>
            <p>Weather: {data.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;
