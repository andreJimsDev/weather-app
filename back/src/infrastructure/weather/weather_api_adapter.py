from typing import Dict

import requests

from src.core.gateway.weather_gateway import WeatherGateway
from src.infrastructure.config.Settings import settings


class WeatherAPIAdapter(WeatherGateway):

    def get_weather(self, city_name: str) -> Dict:
        response = requests.get(settings.WEATHER_BASE_URL, params={"key": settings.WEATHER_API_KEY, "q": city_name})
        response.raise_for_status()
        return response.json()
