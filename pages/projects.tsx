import { GetStaticPropsResult, NextPage } from "next";
import { Layout } from "layout/components";
import { Project } from "projects/components";
import { ProjectResult, RootObject } from "projects/types";
import { getProjects, getProjectInfo } from "projects/apis";

type Props = {
  data: ProjectResult;
};

const Projects: NextPage<Props> = ({ data }) => {
  return (
    <Layout title="Projects">
      <div className="px-5 flex flex-col gap-20">
        {Object.keys(data).map(id => {
          return <Project key={id} info={data[id]} />;
        })}
      </div>
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
