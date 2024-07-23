import unittest
from unittest.mock import Mock

from src.core.gateway.weather_gateway import WeatherGateway
from src.core.usecase.get_weather_by_city_usecase import GetWeatherByCityUseCase


class TestGetWeatherByCityUseCase(unittest.TestCase):
    def setUp(self):
        self.mock_gateway = Mock(spec=WeatherGateway)
        self.usecase = GetWeatherByCityUseCase(self.mock_gateway)

    def test_get_weather_for_city(self):
        city_name = "London"
        expected_result = {"location": {"name": "London"}, "current": {"temp_c": 14.0}}
        self.mock_gateway.get_weather.return_value = expected_result

        result = self.usecase.execute(city_name)

        self.mock_gateway.get_weather.assert_called_once_with(city_name)
        self.assertEqual(result, expected_result)


if __name__ == '__main__':
    unittest.main()
