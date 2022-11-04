import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";

export default {
  title: "base/components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

// export const InitHeader = Template.bind({});
// InitHeader.args = {};

const Template: ComponentStory<typeof Header> = (args: any) => <Header {...args} />;

export const StoryHeader = Template.bind({});
StoryHeader.args = {};
