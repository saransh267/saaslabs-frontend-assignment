import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/kickstarter projects/i);
  expect(linkElement).toBeInTheDocument();
});
