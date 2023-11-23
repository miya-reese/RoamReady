import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../Components/Layout.js';

// Mocking react-router-dom useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/AboutUs', // Set the initial path for testing
  }),
}));

test('renders navigation links', () => {
  render(
    <Router>
      <Layout />
    </Router>
  );

  // Check if the navigation links are rendered
  const aboutUsLink = screen.getByRole('link', { name: /About Us/i });
  const myTripsLink = screen.getByRole('link', { name: /My Trips/i });
  const createLink = screen.getByRole('link', { name: /Create/i });
  const profileLink = screen.getByRole('link', { name: /Profile/i });

});

test('changes active route', () => {
  render(
    <Router>
      <Layout />
    </Router>
  );

  // Click on the My Trips link
  const myTripsLink = screen.getByRole('link', { name: /My Trips/i });
  fireEvent.click(myTripsLink);

  // Check other links
  const aboutUsLink = screen.getByRole('link', { name: /About Us/i });
  const createLink = screen.getByRole('link', { name: /Create/i });
  const profileLink = screen.getByRole('link', { name: /Profile/i });
});