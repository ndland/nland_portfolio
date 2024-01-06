import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "../../src/components/Home/Home";

describe("Home", () => {
  test("renders a welcome message", () => {
    render(<Home />);

    const welcomeMessage = screen.getByRole("button");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
