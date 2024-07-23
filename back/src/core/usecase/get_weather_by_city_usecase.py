from typing import Dict

from src.core.gateway.weather_gateway import WeatherGateway


class GetWeatherByCityUseCase:
    def __init__(self, gateway: WeatherGateway):
        self.gateway = gateway

    def execute(self, city_name: str) -> Dict:
        return self.gateway.get_weather(city_name)
