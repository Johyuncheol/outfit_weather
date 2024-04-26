import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ImageCircle from "./index";

const meta = {
  title: "Atoms/ImageCircle",
  component: ImageCircle,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ImageCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    type: "small",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};

export const Middle: Story = {
  args: {
    type: "middle",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};


export const Big: Story = {
  args: {
    type: "big",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};

