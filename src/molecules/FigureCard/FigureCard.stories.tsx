import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Carousel, { FigureCardProps, FigureDataType } from ".";

const meta: Meta = {
  title: "molecules/FigureCard",
  component: Carousel,
};

type Story = StoryObj<FigureCardProps<FigureDataType>>;

export default meta;

export const SquareBig: Story = {
  args: {
    type: "Square-big",
    data: { name: "Item 1", imgSrc: "/assets/image/inner.jpg" },
  },
};

export const Square: Story = {
  args: {
    type: "Square",
    data: { name: "Item 1", imgSrc: "/assets/image/inner.jpg" },
  },
};

export const SquareSmall: Story = {
  args: {
    type: "Square-small",
    data: { name: "Item 1", imgSrc: "/assets/image/inner.jpg" },
  },
};

export const CircleBig: Story = {
  args: {
    type: "circle-big",
    data: { name: "Item 1", imgSrc: "/assets/image/inner.jpg" },
  },
};

export const Circle: Story = {
  args: {
    type: "circle",
    data: { name: "Item 1", imgSrc: "/assets/image/inner.jpg" },
  },
};

export const CircleSmall: Story = {
  args: {
    type: "circle-small",
    data: { name: "Item 1", imgSrc: "/assets/image/inner.jpg" },
  },
};
