import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import WeatherSection from "./index";

const meta = {
  title: "Organism/WeatherSection",
  component: WeatherSection,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof WeatherSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
