const API_URL = 'http://127.0.0.1:8000/weather';

export const fetchWeather = async (city) => {
    const response = await fetch(`${API_URL}?city=${city}`);

    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données météo');
    }

    return response.json();
};
