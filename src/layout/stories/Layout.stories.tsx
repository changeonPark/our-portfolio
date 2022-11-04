import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Layout } from "layout/components";

export default {
  title: "Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;

export const StoryLayout = Template.bind({});
