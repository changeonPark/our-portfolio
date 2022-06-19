import { Layout } from "base/components"

import { NextPage } from "next"
import Head from "next/head"

type Props = {
  projects: any[]
}

const Projects: NextPage<Props> = ({projects}) => {
  console.log(projects)
  return (
    <Layout>
      <Head>
        <title>박찬건 포트폴리오</title>
        <meta name="description" content="박찬건의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>총 프로젝트: {projects.length}</h1>

      {
        projects.map((item, key) => (
          <h1 key={key}>{item.properties["이름"].title[0].plain_text}</h1>
        ))
      }
    </Layout>
  )
}

export default Projects

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({ 
      sorts: [
        {
          "property": "이름",
          "direction": "ascending"
        }
      ],
      page_size: 100 }),
  }

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    options
  )

  const projects = await res.json()
  
  const projectNames = projects.results.map((item: any) => item.properties["이름"].title[0].plain_text)
  console.log(projectNames)

  return {
    props: {projects: projects.results}, // will be passed to the page component as props
  }
}
