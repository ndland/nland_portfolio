import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "./Home";

describe("Home", () => {
  test("renders a welcome message", () => {
    render(<Home />);

    const welcomeMessage = screen.getByText(/hi/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
