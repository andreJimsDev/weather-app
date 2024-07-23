# Weather App

This project is a full-stack application that allows users to enter a city name and retrieve the corresponding weather data. The backend is built using FastAPI and the frontend is built using ReactJS with Tailwind CSS for styling.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Backend Installation and Setup](#backend-installation-and-setup)
- [Frontend Installation and Setup](#frontend-installation-and-setup)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- [Python 3.7+](https://www.python.org/downloads/)
- [Node.js 14+](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) (or npm)
- [WeatherAPI Key](https://www.weatherapi.com/)

## Backend Installation and Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/andreJimsDev/weather-app.git
    cd weather-app
    ```

2. **Navigate to the backend directory:**

    ```sh
    cd back
    ```

3. **Create and activate a virtual environment:**

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

4. **Install the dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

5. **Create a `.env` file in the `back` directory and add your WeatherAPI key:**

    ```env
    WEATHER_API_KEY=your_weather_api_key
    WEATHER_BASE_URL=https://api.weatherapi.com/v1/current.json
    ```

6. **Run the FastAPI server:**

    ```sh
    uvicorn src.main:app --reload
    ```

    The backend will be available at `http://127.0.0.1:8000`.

## Frontend Installation and Setup

1. **Navigate to the frontend directory:**

    ```sh
    cd ../front
    ```

2. **Install the dependencies:**

    ```sh
    yarn install
    ```

3. **Start the development server:**

    ```sh
    yarn dev
    ```

    The frontend will be available at `http://127.0.0.1:5173`.

## Running the Project

Ensure both the backend and frontend servers are running:

- Backend: `http://127.0.0.1:8000`
- Frontend: `http://127.0.0.1:5173`

Navigate to `http://127.0.0.1:5173` in your browser and use the application to enter a city name and retrieve weather data.

## Testing

### Backend Tests

1. **Navigate to the backend directory:**

    ```sh
    cd back
    ```

2. **Run the tests using pytest:**

    ```sh
    pytest
    ```

### Frontend Tests

1. **Navigate to the frontend directory:**

    ```sh
    cd front
    ```

2. **Run the tests using Yarn:**

    ```sh
    yarn test
    ```

## Project Structure

```plaintext
weather-app/
├── back/
│   ├── src/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── core/
│   │   ├── infrastructure/
│   ├── tests/
│   ├── requirements.txt
│   └── .env
├── front/
│   ├── src/
│   │   ├── components/
│   │   │   └── Weather.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   ├── package.json
│   ├── yarn.lock
│   └── .env
├── README.md
