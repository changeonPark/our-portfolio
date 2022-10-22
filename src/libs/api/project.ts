import axios from "axios";

export const getProjects = async () => {
  const listOptions = {
    method: "POST",
    url: "https://api.notion.com/v1/search",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    data: { filter: { value: "database", property: "object" }, page_size: 20 },
  };
  const { data } = await axios.request(listOptions);
  return data.results;
};

let infoOptions = {
  method: "POST",
  url: "",
  headers: {
    accept: "application/json",
    "Notion-Version": "2022-06-28",
    "content-type": "application/json",
    authorization: `Bearer ${process.env.NOTION_TOKEN}`,
  },
  data: {
    sorts: [
      {
        property: "날짜",
        direction: "descending",
      },
    ],
    page_size: 100,
  },
};

export const getProjectInfo = async (projectId: string) => {
  infoOptions.url = `https://api.notion.com/v1/databases/${projectId}/query`;

  try {
    const { data } = await axios.request(infoOptions);
    return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
