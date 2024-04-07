import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import  Button  from "./index";

const meta = {
  title: "Atoms/Buttons",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit: Story = {
  args: {
    type:"submit",
    children: "Button",
  },
};

export const LinkText: Story = {
  args: {
    type:"linkText",
    children: "Button",
  },
};
