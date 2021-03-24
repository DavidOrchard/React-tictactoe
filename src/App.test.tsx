import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders awesomesauce', () => {
  render(<App />);
  const linkElement = screen.getByText(/Awesomesauce/i);
  expect(linkElement).toBeInTheDocument();
});

test('o click works', async () => {
  render(<App />);
  const row11 = screen.getByRole('cell', { name: "Game square column 1, row 1" });
  expect(row11).toHaveTextContent("");
  expect(screen.getByText("It's o's turn")).toBeInTheDocument();

  fireEvent.click(row11)
  expect(row11).toHaveTextContent("o");
  expect(screen.getByText("It's x's turn")).toBeInTheDocument();

});
test('o has won works', async () => {
  render(<App />);
  const row00 = screen.getByRole('cell', { name: "Game square column 0, row 0" });
  const row01 = screen.getByRole('cell', { name: "Game square column 0, row 1" });
  const row10 = screen.getByRole('cell', { name: "Game square column 1, row 0" });
  const row11 = screen.getByRole('cell', { name: "Game square column 1, row 1" });
  const row20 = screen.getByRole('cell', { name: "Game square column 2, row 0" });

  expect(row11).toHaveTextContent("");
  expect(screen.getByText("It's o's turn")).toBeInTheDocument();

  fireEvent.click(row00);
  fireEvent.click(row01);
  fireEvent.click(row10);
  fireEvent.click(row11);
  fireEvent.click(row20);
  expect(screen.getByText("o has won")).toBeInTheDocument();
});
