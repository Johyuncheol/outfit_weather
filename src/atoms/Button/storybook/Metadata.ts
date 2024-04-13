import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  SubmitButton,
  LinkTextButton,
  SquareButton,
  IconButton,
} from "../index";

export const metaSubmitButton: Meta<typeof SubmitButton> = {
  title: "Atoms/Buttons",
  component: SubmitButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

// LinkTextButton 메타데이터와 스토리
export const metaLinkTextButton: Meta<typeof LinkTextButton> = {
  title: "Atoms/Buttons",
  component: LinkTextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

// SquareButton 메타데이터와 스토리
export const metaSquareButton: Meta<typeof SquareButton> = {
  title: "Atoms/Buttons",
  component: SquareButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

// IconButton 메타데이터와 스토리
export const metaIconButton: Meta<typeof IconButton> = {
  title: "Atoms/Buttons",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};
