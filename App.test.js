import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  const displayElement = screen.getByText(/0/);
  expect(displayElement).toBeInTheDocument();
});
