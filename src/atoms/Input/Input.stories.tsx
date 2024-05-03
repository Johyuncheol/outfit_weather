import type { StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/* placeholder,
onChange = () => {},
onBlur = () => {},
value = "",
id,
type,
required = false, */

export const TextInput: Story = {
  args: {
    id: "id",
    placeholder: "id",
    value: "value",
    type: "text",
    onBlur: () => alert("포커스아웃"),
    required: true,
  },
};

export const PasswordInput: Story = {
  args: {
    id: "id",
    placeholder: "password",
    value: "value",
    type: "password",
    onBlur: () => alert("포커스아웃"),
    required: true,
  },
};