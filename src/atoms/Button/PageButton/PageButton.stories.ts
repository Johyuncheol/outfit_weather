import type { Meta, StoryObj } from "@storybook/react";
import PageButton from ".";

const meta: Meta = {
  title: "Atoms/Buttons/PageButton",
  component: PageButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FalseButton: Story = {
  args: {
    pageNumber: 1,
    state: false,
    onClick: () => alert("클릭"),
  },
};

export const TrueButton: Story = {
  args: {
    pageNumber: 1,
    state: true,
    onClick: () => alert("클릭"),
  },
};
