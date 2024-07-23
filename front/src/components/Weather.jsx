import React from 'react';
import useWeather from "../hooks/useWeather";

const Weather = () => {
    const { city, setCity, data, loading, error, handleSubmit } = useWeather();
    console.log({data});
    console.log({error});
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h1 className="text-2xl font-bold text-gray-700 text-center">Weather App</h1>
                <div className="flex space-x-4">
                    <form onSubmit={handleSubmit} className="mb-4">
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name"
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <button
                            type="submit"
                            className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Get Weather
                        </button>
                    </form>
                </div>

                {loading && <p className="text-center text-gray-500">Loading...</p>}
                {error && <p className="text-center text-red-500">Erreur lors de la récupération des données météo</p>}
                {data && (
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-700">{data.location.name}</h2>
                        <p className="text-lg text-gray-600">Temperature: {data.current.temp_c} °C</p>
                        <p className="text-lg text-gray-600">Condition: {data.current.condition.text}</p>
                        <img
                            src={data.current.condition.icon}
                            alt={data.current.condition.text}
                            className="mx-auto mt-4"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
