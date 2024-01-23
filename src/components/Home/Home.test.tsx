import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { it, describe, expect, test, vi } from "vitest";
import Home from "./Home";

describe("Home", () => {
  test("renders a welcome message", () => {
    render(<Home />);

    const welcomeMessage = screen.getByText(/hello/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("calls the onClick handler when the button is clicked", () => {
    const handleClick = vi.fn();
    render(<Home onClick={handleClick} />);

    fireEvent.click(screen.getByTestId("arrow"));

    expect(handleClick).toHaveBeenCalled();
  });
});
