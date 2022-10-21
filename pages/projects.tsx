import { Layout } from "base/components";

import { NextPage } from "next";
import { Item } from "projects/components";
import { useEffect } from "react";

type Props = {
  projects: any[];
};

const Projects: NextPage<Props> = ({ projects }) => {
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <Layout title="Projects">
      <h1 className="text-4xl font-bold mx-5 2xl:mx-auto">
        총 프로젝트: <span className="text-orange-400">{projects.length}</span>
      </h1>

      <div className="py-10 mx-5 2xl:mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((item, key) => (
          <Item data={item} key={key} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

export async function getStaticProps() {
  const listOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({ filter: { value: "database", property: "object" }, page_size: 5 }),
  };
  const { results: projectList } = await (await fetch("https://api.notion.com/v1/search", listOptions)).json();

  // console.log(projectList);
  const dbNames = projectList.map((item: any) => item.title[0].plain_text);
  console.log(dbNames);
  const dbIds = projectList.map((item: any) => item.id);
  console.log(dbIds);

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "날짜",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options);

  const { results: projects } = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
    revalidate: 30, //2592000 === 30일
  };
}
