import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RootObject } from "projects/types";
import Item from "./Item";

const mookData: RootObject = {
  object: "page",
  id: "ae321de6-7bc9-4323-a8cc-4ea0f6f7e853",
  created_time: "2022-10-21T12:41:00.000Z",
  last_edited_time: "2022-10-23T11:59:00.000Z",
  created_by: {
    object: "user",
    id: "8fbe4af0-138f-43da-958d-05c2fbbbc329",
  },
  last_edited_by: {
    object: "user",
    id: "8fbe4af0-138f-43da-958d-05c2fbbbc329",
  },
  cover: {
    type: "external",
    external: {
      url: "https://images.unsplash.com/photo-1429041966141-44d228a42775?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
    },
  },
  icon: null,
  parent: {
    type: "database_id",
    database_id: "191c8195-f436-4739-b1a0-e6ce85d8d171",
  },
  archived: false,
  properties: {
    introduce: {
      id: "%3AUcy",
      type: "rich_text",
      rich_text: [
        {
          type: "text",
          text: {
            content: "제 이력을 관리하는 포트폴리오 웹사이트입니다.",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "제 이력을 관리하는 포트폴리오 웹사이트입니다.",
          href: null,
        },
      ],
    },
    tag: {
      id: "R%3B_%5D",
      type: "multi_select",
      multi_select: [
        {
          id: "c0475c71-e337-45a3-a4f3-c864dfd33211",
          name: "Next.js",
          color: "yellow",
        },
        {
          id: "30daaffe-0c85-42c8-a5a8-b7019e842146",
          name: "TailwindCSS",
          color: "red",
        },
        {
          id: "7aa59801-f3f2-478a-9a21-34007b97318b",
          name: "Github Action",
          color: "pink",
        },
        {
          id: "92968986-1ba9-4d1a-a894-1303f4a35caf",
          name: "Yarn Berry",
          color: "brown",
        },
        {
          id: "92d94e56-4b5c-4aad-b095-e5dd78013641",
          name: "Notion API",
          color: "green",
        },
      ],
    },
    link: {
      id: "p%3Fop",
      type: "url",
      url: "https://cgpportfolio.notion.site/My-Protfolio-ae321de67bc94323a8cc4ea0f6f7e853",
    },
    date: {
      id: "wNOY",
      type: "date",
      date: {
        start: "2022-10-23",
        end: null,
        time_zone: null,
      },
    },
    name: {
      id: "title",
      type: "title",
      title: [
        {
          type: "text",
          text: {
            content: "My Protfolio",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "My Protfolio",
          href: null,
        },
      ],
    },
  },
  url: "https://www.notion.so/My-Protfolio-ae321de67bc94323a8cc4ea0f6f7e853",
};

export default {
  title: "projects/components/Item",
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args: any) => <Item {...args} />;

export const StoryItem = Template.bind({});
StoryItem.args = {
  data: mookData,
};
