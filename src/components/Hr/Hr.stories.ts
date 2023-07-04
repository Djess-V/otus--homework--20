import type { Meta, StoryObj } from "@storybook/react";
import { Hr } from "./Hr";

const meta = {
  title: "Hr",
  component: Hr,
  tags: ["autodocs"],
} satisfies Meta<typeof Hr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
