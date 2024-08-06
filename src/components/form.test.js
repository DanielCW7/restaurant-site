// FormComponent.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers
import Form from './form';

test('shows an error message when the name field is empty and the form is submitted', () => {
  render(<Form />);

  // Find the form and submit it without filling in the name
  const submitButton = screen.getByText(/Choose a day/i);
  fireEvent.click(submitButton);

  // Check for the error message
  const errorMessage = screen.getByText(/date is required/i);
  expect(errorMessage).toBeInTheDocument();
});

test('does not show an error message when the date field is filled and the form is submitted', () => {
    render(<Form />);

  // Fill in the name field
  const nameInput = screen.getByLabelText(/date/i);
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  // Submit the form
  const submitButton = screen.getByText(/Choose a day/i);
  fireEvent.click(submitButton);

  // Check that the error message is not present
  const errorMessage = screen.queryByText(/date is required/i);
  expect(errorMessage).not.toBeInTheDocument();
});
