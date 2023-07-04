import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hr } from "./Hr";

describe("Hr", () => {
  it("component's default rendering", () => {
    render(<Hr />);
    expect(screen.getByTestId("hr-test")).toBeInTheDocument();
  });
});
