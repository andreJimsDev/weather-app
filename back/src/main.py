from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.infrastructure.controller import weather_controller

app = FastAPI()

origins = [
    "http://localhost:3000",  # Adresse de votre frontend React
    "http://127.0.0.1:3000"   # Adresse alternative pour le frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Permet toutes les méthodes HTTP
    allow_headers=["*"],  # Permet tous les en-têtes
)

app.include_router(weather_controller.router)
