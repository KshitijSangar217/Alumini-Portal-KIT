import { render, screen } from '@testing-library/react';
import Alumni from './Alumni';

test('renders learn react link', () => {
  render(<Alumni />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
