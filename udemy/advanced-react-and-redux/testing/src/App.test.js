import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi there', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi there/i);
  expect(linkElement).toBeInTheDocument();
});
