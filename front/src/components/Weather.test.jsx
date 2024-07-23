// src/components/Weather.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Weather from './Weather';

beforeEach(() => {
    jest.spyOn(global, 'fetch');
});

afterEach(() => {
    global.fetch.mockRestore();
});

test('renders Weather component', () => {
    render(<Weather />);
    expect(screen.getByPlaceholderText(/Enter city name/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Weather/i)).toBeInTheDocument();
});

test('fetches and displays weather data', async () => {
    const weatherData = {
        location: { name: 'London' },
        current: {
            temp_c: 14.0,
            condition: { text: 'Partly cloudy', icon: '//cdn.weatherapi.com/weather/64x64/night/116.png' }
        }
    };

    global.fetch.mockResolvedValue({
        ok: true,
        json: async () => weatherData,
    });

    render(<Weather />);

    fireEvent.change(screen.getByPlaceholderText(/Enter city name/i), { target: { value: 'London' } });
    fireEvent.click(screen.getByText(/Get Weather/i));

    await waitFor(() => {
        expect(screen.getByText(/Temperature: 14.0 °C/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Partly cloudy/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Partly cloudy/i)).toBeInTheDocument();
});

test('displays error on fetch failure', async () => {
    global.fetch.mockResolvedValue({
        ok: false,
    });

    render(<Weather />);

    fireEvent.change(screen.getByPlaceholderText(/Enter city name/i), { target: { value: 'UnknownCity' } });
    fireEvent.click(screen.getByText(/Get Weather/i));

    await waitFor(() => {
        expect(screen.getByText(/Error fetching weather data/i)).toBeInTheDocument();
    });
});
