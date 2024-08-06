import { render, screen, fireEvent } from '@testing-library/react';
import Form from './components/form';

test('views booking data', () => {
  render(<Form />);

  const store = localStorage.getItem("Reservation")

  
  expect(store).toBe.toBeNull
});
