import type { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";

const meta: Meta = {
  title: "Atoms/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    iconSrc: "/assets/icon/login.svg",
    altText: "alt 텍스트입니다",
    onClick: () => alert("클릭"),
    width: 35,
    height: 35,
  },
};
