import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    WEATHER_BASE_URL: str = os.getenv("WEATHER_BASE_URL")
    WEATHER_API_KEY: str = os.getenv("WEATHER_API_KEY")


settings = Settings()
