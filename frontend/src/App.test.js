import { render, screen} from '@testing-library/react';
import App from './App';

test('Sample test', () => {
  expect(null).toBe(null);

})

test('Text : The current count is', () => {
  render(<App />);
  const linkElement = screen.getByText(/The current count is/i);
  expect(linkElement).toBeInTheDocument();
});

