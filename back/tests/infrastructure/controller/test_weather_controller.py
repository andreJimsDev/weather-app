import pytest
from fastapi.testclient import TestClient

from src.core.usecase.get_weather_by_city_usecase import GetWeatherByCityUseCase
from src.infrastructure.weather.fake_weather_api_adapter import FakeWeatherAPIAdapter
from src.main import app

client = TestClient(app)


@pytest.fixture
def fake_weather_usecase():
    fake_gateway = FakeWeatherAPIAdapter()
    return GetWeatherByCityUseCase(fake_gateway)


def get_fake_weather_usecase():
    fake_gateway = FakeWeatherAPIAdapter()
    return GetWeatherByCityUseCase(fake_gateway)


@pytest.fixture(autouse=True)
def override_dependency():
    from src.infrastructure.controller.weather_controller import get_weather_usecase

    app.dependency_overrides[get_weather_usecase] = get_fake_weather_usecase
    yield
    app.dependency_overrides[get_weather_usecase] = get_weather_usecase


def test_get_weather_success():
    city_name = "London"
    expected_result = {
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

    response = client.get(f"/weather?city={city_name}")

    assert response.status_code == 200
    assert response.json() == expected_result


def test_get_weather_failure():
    city_name = "UnknownCity"

    response = client.get(f"/weather?city={city_name}")

    assert response.status_code == 500
    assert response.json() == {"detail": "City not found"}
