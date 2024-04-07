import type { Meta, StoryObj } from "@storybook/react";
import HeaderOptions from "./index";

const meta = {
  title: "molecules/HeaderOptions",
  component: HeaderOptions,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof HeaderOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {};
