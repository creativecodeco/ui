import type { Meta, StoryObj } from "@storybook/react";

import TextBox from "./text-box.component";

const meta: Meta<typeof TextBox> = {
  title: "CreativeCode.com.co/UI/Form/TextBox",
  component: TextBox,
  argTypes: {
    label: {
      name: "label",
      type: { name: "string" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextBox>;

export const Primary: Story = {
  args: {},
};
