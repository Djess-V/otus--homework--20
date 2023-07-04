import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("Paragraph", () => {
  it("rendering component", async () => {
    render(<Paragraph text="Test" />);

    const element = screen.getByText("Test");

    expect(element).toBeInTheDocument();
  });
});
