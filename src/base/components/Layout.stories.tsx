import { ComponentMeta, ComponentStory } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "base/components/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;

export const StoryLayout = Template.bind({});
