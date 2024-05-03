import type { Meta, StoryObj } from "@storybook/react";
import LinkTextButton from ".";

const meta: Meta = {
  title: "Atoms/Buttons/LinkTextButton",
  component: LinkTextButton,
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
