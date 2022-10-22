import { ComponentStory, ComponentMeta } from "@storybook/react";
import Item from "./Item";

export default {
  title: "projects/components/Item",
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args: any) => <Item {...args} />;

export const StoryItem = Template.bind({});
