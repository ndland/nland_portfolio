import type { Meta, StoryObj } from "@storybook/react";

import Home from "./Home";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Home> = {
  component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;

export const FirstStory: Story = {
  args: {
    name: "John",
  },
};
