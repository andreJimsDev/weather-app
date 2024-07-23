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
