import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Image } from "./Image";
import owls from "./assets/owls.jpg";

describe("Image", () => {
  it("component's default rendering", () => {
    render(<Image src={owls} />);
    expect(screen.getByAltText("Image")).toBeInTheDocument();
  });
  it("rendering component with props", async () => {
    render(<Image src={owls} width={500} height={500} />);
    expect(screen.getByAltText("Image")).toBeInTheDocument();
  });
});
