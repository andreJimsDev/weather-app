from fastapi import FastAPI

from src.infrastructure.controller import weather_controller

app = FastAPI()

app.include_router(weather_controller.router)
