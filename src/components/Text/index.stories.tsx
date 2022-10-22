import { Meta, StoryObj } from "@storybook/react";

import { Text } from ".";
import { TextProps } from "./types";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<TextProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Component with p</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
