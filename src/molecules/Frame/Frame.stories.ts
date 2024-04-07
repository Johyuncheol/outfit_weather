import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Frame from "./index";

const meta = {
  title: "molecules/Frame",
  component: Frame,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    title:"추천순",
    children:"detail"
  },
};


