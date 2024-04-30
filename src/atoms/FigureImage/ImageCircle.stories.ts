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

export const CircleBig: Story = {
  args: {
    type: "circle-big",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};

export const CircleSmall: Story = {
  args: {
    type: "circle-small",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};

export const Circle: Story = {
  args: {
    type: "circle",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};

export const SquareSmall: Story = {
  args: {
    type: "Square-small",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};

export const Square: Story = {
  args: {
    type: "Square",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};

export const SquareBig: Story = {
  args: {
    type: "Square-big",
    imgSrc: "/assets/image/spring.jpg",
    alt: "테스트이미지",
  },
};
