import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  const element = screen.getByRole('navigation');
  expect(element).toBeInTheDocument();
});
