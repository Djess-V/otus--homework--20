import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "h1",
    text: "Header for storybook",
  },
};
