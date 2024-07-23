from typing import Dict

from fastapi import APIRouter, Depends, HTTPException

from src.core.usecase.get_weather_by_city_usecase import GetWeatherByCityUseCase
from src.infrastructure.weather.weather_api_adapter import WeatherAPIAdapter

router = APIRouter()


def get_weather_usecase() -> GetWeatherByCityUseCase:
    gateway = WeatherAPIAdapter()
    return GetWeatherByCityUseCase(gateway)


@router.get("/weather")
def get_weather(city: str, usecase: GetWeatherByCityUseCase = Depends(get_weather_usecase)) -> Dict:
    try:
        return usecase.execute(city)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
