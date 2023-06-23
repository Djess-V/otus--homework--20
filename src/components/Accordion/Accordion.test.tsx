import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("component's default rendering", () => {
    render(<Accordion header="Accordion" text="Test" />);

    const element = screen.getByTestId("accordion-test");

    expect(element).toBeInTheDocument();

    const header = screen.getByText("Accordion");

    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe("H1");

    const paragraph = screen.queryByTestId("paragraph-test");

    expect(paragraph).toBeNull();
  });

  it("rendering component with props", async () => {
    render(<Accordion size="h3" header="Accordion" text="Test" />);

    const header = screen.getByText("Accordion");

    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe("H3");
  });

  it("auditing of state", async () => {
    render(<Accordion size="h3" header="Accordion" text="Test" countP={5} />);

    const header = screen.getByTestId("header-test");

    await userEvent.click(header);

    let ps = screen.queryAllByText("Test");

    expect(ps.length).toBe(5);

    await userEvent.click(header);

    ps = screen.queryAllByText("Test");

    expect(ps.length).toBe(0);
  });
});
