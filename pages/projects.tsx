import { Layout } from "base/components";
import { ProjectResult, RootObject } from "interface/project";
import { getProjectInfo, getProjects } from "libs/api/project";
import { GetStaticPropsResult, NextPage } from "next";
import { Project } from "projects/components";

type Props = {
  data: ProjectResult;
};

const Projects: NextPage<Props> = ({ data }) => {
  console.log(data);

  return (
    <Layout title="Projects">
      {Object.keys(data).map(id => {
        return <Project key={id} info={data[id]} />;
      })}
    </Layout>
  );
};

export default Projects;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const projectList = await getProjects();

  let result: ProjectResult = {};

  for (const item of projectList) {
    const projectInfo: RootObject[] = await getProjectInfo(item.id);
    result[item.id] = {
      projectName: item.title[0].plain_text,
      data: projectInfo,
    };
  }

  return {
    props: {
      data: result,
    }, // will be passed to the page component as props
    revalidate: 30, //2592000 === 30일
  };
}
