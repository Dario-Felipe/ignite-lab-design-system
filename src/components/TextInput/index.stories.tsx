import { Meta, StoryObj } from "@storybook/react";

import { Envelope } from "phosphor-react";

import { TextInput } from ".";
import { TextInputRootProps } from "./types";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.input placeholder="jhondoe@example.com" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [<TextInput.input placeholder="jhondoe@example.com" />],
  },
};
