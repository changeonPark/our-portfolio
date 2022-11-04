import axios from "axios";

class ProjectAPI {
  protected option: Object;

  constructor() {
    console.log("init!");
    this.option = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      },
    };
  }

  protected fetcher(option: Object) {
    try {
      return axios.request(option).then(res => res.data.results);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  getProject() {
    const option = {
      ...this.option,
      url: "https://api.notion.com/v1/search",
      data: { filter: { value: "database", property: "object" }, page_size: 20 },
    };
    return this.fetcher(option);
  }
  getProjectInfo(projectId: string) {
    const option = {
      ...this.option,
      url: `https://api.notion.com/v1/databases/${projectId}/query`,
      data: {
        sorts: [
          {
            property: "date",
            direction: "descending",
          },
        ],
        page_size: 100,
      },
    };
    return this.fetcher(option);
  }
}

export const classAPI = new ProjectAPI();

const defaultOption = {
  headers: {
    accept: "application/json",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
    authorization: `Bearer ${process.env.NOTION_TOKEN}`,
  },
};

const fetcher = (option: Object) => {
  try {
    return axios.request(option).then(res => res.data.results);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProjects = () => {
  const option = {
    ...defaultOption,
    method: "POST",
    url: "https://api.notion.com/v1/search",
    data: { filter: { value: "database", property: "object" }, page_size: 20 },
  };
  return fetcher(option);
};

export const getProjectInfo = (projectId: string) => {
  const option = {
    ...defaultOption,
    method: "POST",
    url: `https://api.notion.com/v1/databases/${projectId}/query`,
    data: {
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
      page_size: 100,
    },
  };
  return fetcher(option);
};
