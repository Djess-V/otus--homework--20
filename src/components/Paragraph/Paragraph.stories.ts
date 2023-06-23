import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta = {
  title: "Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Paragraph for storybook",
  },
};
