import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Carousel, { CarouselProps } from ".";

interface CarouselTestType {
  id: string;
  name: string;
  imgSrc: string;
}

const meta: Meta = {
  title: "molecules/Carousel",
  component: Carousel,
};

type Story = StoryObj<CarouselProps<CarouselTestType>>;

export default meta;

export const Carousels: Story = {
  args: {
    title: "sda",
    data: [
      { id: "1", name: "Item 1", imgSrc: "/assets/image/inner.jpg" },
      { id: "2", name: "Item 2", imgSrc: "/assets/image/inner.jpg" },
      { id: "3", name: "Item 3", imgSrc: "/assets/image/inner.jpg" },
      { id: "4", name: "Item 4", imgSrc: "/assets/image/inner.jpg" },
    ],
    renderFigure: (item) => <img src={item.imgSrc}/>,
    onItemClick: (item) => alert(`Clicked item: ${item.name}`),
  },
};
