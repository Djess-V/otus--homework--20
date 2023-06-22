import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("render component", () => {
    render(<Button label="click" click={() => null} />);

    screen.debug();
  });
});
