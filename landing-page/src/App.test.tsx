import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Coinica from './Coinica';

test('renders learn react link', () => {
  render(<Coinica />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
