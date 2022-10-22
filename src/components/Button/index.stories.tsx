import { Meta } from "@storybook/react";

import { Button } from ".";
import { ButtonProps } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
    onClick: () => {},
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default = {};
