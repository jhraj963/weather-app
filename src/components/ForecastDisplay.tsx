import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ForecastDisplay = () => {
    const forecast = useSelector((state: RootState) => state.weather.forecast);

    if (!forecast) return null;

    const daily = forecast.list.filter((_: any, index: number) => index % 8 === 0);

    return (
        <div className="mt-4">
            <h5>📅 5 days forecast:</h5>
            <div className="row">
                {daily.map((item: any, index: number) => (
                    <div className="col-md-2 col-sm-4 col-6 mb-3" key={index}>
                        <div className="card p-2 text-center">
                            <h6>{new Date(item.dt_txt).toLocaleDateString('bn-BD')}</h6>
                            <p>{item.main.temp}°C</p>
                            <p>{item.weather[0].description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastDisplay;