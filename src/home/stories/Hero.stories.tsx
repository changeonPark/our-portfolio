import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hero } from "home/components";

export default {
  title: "Landing/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args: any) => <Hero {...args} />;

export const section = Template.bind({});
