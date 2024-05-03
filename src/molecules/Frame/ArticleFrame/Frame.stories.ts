import type { Meta, StoryObj } from "@storybook/react";
import Frame from "./index";

const meta = {
  title: "molecules/Frame/ArticleFrame",
  component: Frame,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalFrame: Story = {
  args: {
    title: "추천순",
    children: "detail",
  },
};

export const BoldFrame: Story = {
  args: {
    type: "bold",
    title: "추천순",
    children: "detail",
  },
};
