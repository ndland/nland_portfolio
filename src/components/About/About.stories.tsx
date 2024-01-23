import type { Meta, StoryObj } from "@storybook/react";

import About from "./About";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof About> = {
  component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const FirstStory: Story = {
  args: {},
};
