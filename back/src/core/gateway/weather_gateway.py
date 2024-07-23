from abc import ABC
from typing import Dict


class WeatherGateway(ABC):
    def get_weather(self, city_name: str) -> Dict:
        pass
