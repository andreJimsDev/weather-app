// src/hooks/useWeather.js
import { useState, useCallback } from 'react';
import { fetchWeather } from '../api/weatherApi';

const useWeather = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWeather = useCallback(async () => {
        if (!city) return;
        setLoading(true);
        try {
            const weatherData = await fetchWeather(city);
            setData(weatherData);
            setError(null);
        } catch (err) {
            setError(err);
            setData(null);
        } finally {
            setLoading(false);
        }
    }, [city]);

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather().then();
    };

    return {
        city,
        setCity,
        data,
        loading,
        error,
        handleSubmit,
    };
};

export default useWeather;
