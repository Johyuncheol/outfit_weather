import type { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta = {
  title: "Atoms/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    iconSrc: "/assets/icon/login.svg",
    altText: "alt 텍스트입니다",
    onClick: () => alert("클릭"),
    width: 35,
    height: 35,
  },
};


export const Button_clicked: Story = {
  args: {
    iconSrc: "/assets/icon/login.svg",
    altText: "alt 텍스트입니다",
    onClick: () => alert("클릭"),
    width: 35,
    height: 35,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 버튼 클릭 이벤트를 트리거합니다.
    await userEvent.click(canvas.getByRole('button'));

    const button = canvas.getByRole('button');
    const isClicked = button.classList.contains('clicked');
    await expect(isClicked).toBe(true);
  }
};