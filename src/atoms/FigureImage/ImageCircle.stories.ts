import type { StoryObj } from "@storybook/react";
import ImageCircle from "./index";

const meta = {
  title: "Atoms/FigureImage",
  component: ImageCircle,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleBig: Story = {
  args: {
    type: "circle-big",
    imgSrc: "/assets/image/inner.jpg",
    alt: "테스트이미지",
  },
};

export const CircleSmall: Story = {
  args: {
    type: "circle-small",
    imgSrc: "/assets/image/inner.jpg",
    alt: "테스트이미지",
  },
};

export const Circle: Story = {
  args: {
    type: "circle",
    imgSrc: "/assets/image/inner.jpg",
    alt: "테스트이미지",
  },
};

export const SquareSmall: Story = {
  args: {
    type: "Square-small",
    imgSrc: "/assets/image/inner.jpg",
    alt: "테스트이미지",
  },
};

export const Square: Story = {
  args: {
    type: "Square",
    imgSrc: "/assets/image/inner.jpg",
    alt: "테스트이미지",
  },
};

export const SquareBig: Story = {
  args: {
    type: "Square-big",
    imgSrc: "/assets/image/inner.jpg",
    alt: "테스트이미지",
  },
};
