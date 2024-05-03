import type { StoryObj } from "@storybook/react";
import SelectBox from ".";

const meta = {
  title: "Atoms/SelectBox",
  component: SelectBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const RequireSelectBox: Story = {
  args: {
    id: "id",
    options: options,
    onChange: () => alert("변경"),
    required: true,
  },
};

export const OptionalSelectBox: Story = {
  args: {
    id: "id",
    options: options,
    onChange: () => alert("변경"),
    required: false,
  },
};
