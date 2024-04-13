import type { StoryObj } from "@storybook/react";
import {
  metaSubmitButton,
  metaLinkTextButton,
  metaSquareButton,
  metaIconButton,
} from "./Metadata";

export const Submit: StoryObj<typeof metaSubmitButton> = {
  args: {
    children: "Button",
  },
};

export const LinkText: StoryObj<typeof metaLinkTextButton> = {
  args: {
    children: "Button",
  },
};

export const Square: StoryObj<typeof metaSquareButton> = {
  args: {
    children: "Button",
  },
};

export const Icon: StoryObj<typeof metaIconButton> = {
  args: {
    iconSrc: "/assets/icon/login",
    altText: "alt 텍스트입니다",
    onClick: () => alert("클릭"),
    width: 35,
    height: 35,
  },
};

export default {
  Submit,
  LinkText,
  Square,
  Icon,
};
