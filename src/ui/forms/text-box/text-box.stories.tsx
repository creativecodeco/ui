import type { Meta, StoryObj } from "@storybook/react";

import TextBox from "./text-box.component";

const meta: Meta<typeof TextBox> = {
  title: "CreativeCode.com.co/UI/Form/TextBox",
  component: TextBox,
  argTypes: {
    name: {
      description: "Unique Name",
      type: { name: "string", required: true },
    },
    label: {
      description: "Label",
      type: "string",
    },
    isError: {
      description: "TextBox has error",
      type: "boolean",
    },
    error: {
      description: "Error message",
      type: "string",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
  args: {
    name: "text-box",
  },
};

export default meta;

type Story = StoryObj<typeof TextBox>;

export const Primary: Story = {
  args: {},
};
