import { render, screen, fireEvent } from '@testing-library/react';
import Form from './components/form';

test('views booking data', () => {
  render(<Form />);

  const form = screen.getByTestId('bookingForm-input');
  const store = localStorage.getItem("Reservation")
  // fireEvent.click(form)

  expect(store).toBe.toBeNull
});
