import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../src/components/Home/Home";

describe("Home", () => {
  test("renders a welcome message", () => {
    render(<Home name="John" />);

    const welcomeMessage = screen.getByText("Welcome, John!");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
