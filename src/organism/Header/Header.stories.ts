import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Header from "./index";

const meta = {
  title: "Organism/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
