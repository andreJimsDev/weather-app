from typing import Dict

from src.core.gateway.weather_gateway import WeatherGateway


class FakeWeatherAPIAdapter(WeatherGateway):

    def get_weather(self, city_name: str) -> Dict:
        if city_name == "UnknownCity":
            raise Exception("City not found")
        return {
            "location": {"name": "London"},
            "current": {
                "temp_c": 14.0,
                "condition": {"text": "Partly cloudy", "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                              "code": 1003},
                "wind_kph": 17.0,
                "wind_degree": 240,
                "wind_dir": "WSW",
                "pressure_mb": 1012.0,
                "precip_mm": 0.0,
                "humidity": 76,
                "cloud": 50,
                "feelslike_c": 13.0,
                "vis_km": 10.0,
                "uv": 4.0,
                "gust_kph": 15.0
            }
        }
