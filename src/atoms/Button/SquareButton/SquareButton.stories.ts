import type { Meta, StoryObj } from "@storybook/react";
import SquareButton from ".";

const meta: Meta = {
  title: "Atoms/Buttons/SquareButton",
  component: SquareButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: "Button",
    onClick: () => alert("클릭"),
  },
};
