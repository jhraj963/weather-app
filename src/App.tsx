import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './store/weatherSlice';
import { RootState } from './store';
import { WeatherData } from './interfaces/weather';
import './App.css';

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography
} from 'mdb-react-ui-kit';

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.weather.data) as WeatherData | null;
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = () => {
    if (city.trim() !== '') {
      dispatch(fetchWeather(city) as any);
    }
  };
  type WeatherData = {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  };



  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <section className="vh-100" style={{ backgroundColor: '#f5f6f7' }}>
      <MDBContainer className="py-5 h-100">
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold">🌤️ Weather App</h1>
          <p className="text-muted">Get real-time weather updates for any city</p>
          <small>Make By Julfiqur Haidar Raja</small>
        </div>
        <button className="btn btn-secondary" onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" lg="8" xl="6">
            <div className="input-group mb-4 shadow-sm">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="btn btn-primary btn-lg" onClick={handleSearch}>
                Search
              </button>
            </div>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-danger text-center">{error}</p>}

            {data && (
              <MDBCard className="bg-dark text-white" style={{ borderRadius: '40px' }}>
                <div className="bg-image" style={{ borderRadius: '35px', overflow: 'hidden' }}>
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                    className="card-img"
                    alt="weather"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(190, 216, 232, .5)' }}
                  ></div>
                </div>
                <div className="card-img-overlay text-dark p-5">
                  <MDBTypography tag="h4" className="mb-0">
                    {data.name}, {data.sys.country}
                  </MDBTypography>
                  <p className="text-muted">{new Date().toLocaleString()}</p>
                  <p className="display-2 my-3">{data.main.temp}°C</p>
                  <p className="mb-2">
                    Feels Like: <strong>{data.main.feels_like} °C</strong>
                  </p>
                  <MDBTypography tag="h5" className="text-capitalize">
                    {data.weather[0].description}
                  </MDBTypography>
                  <div className="d-flex justify-content-between mt-3">
                    <p>💨 Wind: {data.wind.speed} m/s</p>
                    <p>💧 Humidity: {data.main.humidity}%</p>
                  </div>
                </div>
              </MDBCard>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default App;