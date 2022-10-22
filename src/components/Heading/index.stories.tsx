import { Meta, StoryObj } from "@storybook/react";

import { Heading } from ".";
import { HeadingProps } from "./types";

export default {
  title: "Components/Heading",
  component: Heading,
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
} as Meta<HeadingProps>;

export const Default = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Componentn with h1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
