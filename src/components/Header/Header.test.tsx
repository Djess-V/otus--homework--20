import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("component's default rendering", () => {
    render(<Header text="Test" />);

    const element = screen.getByText("Test");

    expect(element.tagName).toBe("H1");
  });
  it("rendering component with props", async () => {
    render(<Header size="h2" text="Test" />);

    const element = screen.getByText("Test");

    await userEvent.click(element);

    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("H2");
  });
});
