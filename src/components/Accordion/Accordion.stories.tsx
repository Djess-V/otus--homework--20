import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "Accordion for storybook",
    text: "Paragraph for storybook",
  },
};

export const FiveParagraphs: Story = {
  args: {
    header: "Accordion for storybook",
    text: "Paragraph for storybook",
    countP: 5,
  },
};
