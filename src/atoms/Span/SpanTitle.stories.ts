import type { Meta, StoryObj } from "@storybook/react";
import Span from "./index";

const meta = {
  title: "Atoms/Spans",
  component: Span,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Span>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    type: "title",
    children: "Button",
  },
};

export const SubTitle: Story = {
  args: {
    type: "subTitle",
    children: "Button",
  },
};

export const SubTitle2: Story = {
  args: {
    type: "subTitle2",
    children: "Button",
  },
};

export const Detail: Story = {
  args: {
    type: "detail",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    type: "large",
    children: "Button",
  },
};
