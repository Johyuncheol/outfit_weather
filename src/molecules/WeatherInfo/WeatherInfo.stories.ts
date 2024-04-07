import type { Meta, StoryObj } from "@storybook/react";
import WeatherInfo from "./index";

const meta = {
  title: "molecules/WeatherInfo",
  component: WeatherInfo,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof WeatherInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {};
