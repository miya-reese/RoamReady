import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ManageProfileForm from '../Components/ManageProfileForm.js';
import ManageProfileController from '../Components/ManageProfileController.js';
import App from '../Components/App.js';
import Card from '../Components/Card.js'
import '@testing-library/jest-dom';
import '@testing-library/react';

// Mocking the ManageProfileController function
jest.mock('../Components/ManageProfileController.js', () => jest.fn());

test('renders ManageProfileForm with input fields and submit button', () => {
  render(<App />);
  const profileLink = screen.getByRole('link', { name: /Profile/i });
  fireEvent.click(profileLink);
  const editButton = screen.getByRole('button', { name: /Edit/i });
  fireEvent.click(editButton);
  // Check if input fields are rendered
  const firstnameInput = screen.getByPlaceholderText(/First Name/i);
  const lastnameInput = screen.getByPlaceholderText(/Last Name/i);
  const usernameInput = screen.getByPlaceholderText(/Username/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const phoneInput = screen.getByPlaceholderText(/Phone number/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const addressInput = screen.getByPlaceholderText(/Address/i);

  expect(firstnameInput).toBeInTheDocument();
  expect(lastnameInput).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();

  // Check if the submit button is rendered
  const submitButton = screen.getByRole('button', { name: /Submit/i });
  expect(submitButton).toBeInTheDocument();
});

test('calls ManageProfileController function when submit button is clicked', () => {
  render(<App />);
  const profileLink = screen.getByRole('link', { name: /Profile/i });
  fireEvent.click(profileLink);
  const editButton = screen.getByRole('button', { name: /Edit/i });
  fireEvent.click(editButton);

  // Mock user input
    const userInput = {
      firstname: 'John',
      lastname: 'Doe',
      username: 'john_doe',
      password: process.env.TEST_PASS,
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      address: '123 Main St'
    };

    // Populate form fields using input names
    Object.keys(userInput).forEach((key) => {
      const inputField = screen.getByLabelText(new RegExp(key, 'i'));
      fireEvent.change(inputField, { target: { value: userInput[key] } });
    });

    // Click the submit button
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    fireEvent.click(submitButton);

    // Check if ManageProfileController function is called with the correct arguments
    expect(ManageProfileController).toHaveBeenCalledWith(userInput);
  });
