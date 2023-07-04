import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";
import owls from "./assets/owls.jpg";

const meta = {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: owls,
  },
};

export const Small: Story = {
  args: {
    src: owls,
    width: 100,
    height: 100,
  },
};

export const Large: Story = {
  args: {
    src: owls,
    width: 600,
    height: 600,
  },
};
