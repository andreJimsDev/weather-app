// src/components/Weather.js
import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/weather?city=${city}`);
            if (!response.ok) {
                throw new Error('Error fetching weather data');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h1 className="text-2xl font-bold text-gray-700 text-center">Weather App</h1>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <button
                        onClick={fetchWeather}
                        className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Get Weather
                    </button>
                </div>

                {loading && <p className="text-center text-gray-500">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {weatherData && (
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-700">{weatherData.location.name}</h2>
                        <p className="text-lg text-gray-600">Temperature: {weatherData.current.temp_c} °C</p>
                        <p className="text-lg text-gray-600">Condition: {weatherData.current.condition.text}</p>
                        <img
                            src={weatherData.current.condition.icon}
                            alt={weatherData.current.condition.text}
                            className="mx-auto mt-4"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
