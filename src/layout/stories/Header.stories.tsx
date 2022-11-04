import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "layout/components";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

// export const InitHeader = Template.bind({});
// InitHeader.args = {};

const Template: ComponentStory<typeof Header> = (args: any) => <Header {...args} />;

export const StoryHeader = Template.bind({});
StoryHeader.args = {};
