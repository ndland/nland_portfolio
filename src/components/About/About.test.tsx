import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "./About";

describe("About", () => {
  it("should render correctly", () => {
    render(<About />);

    const about = screen.getByText(/about/i);
    expect(about).toBeInTheDocument();
  });
});
