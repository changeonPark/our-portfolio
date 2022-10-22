import { ProjectInfo } from "interface/project";
import { Item } from ".";

type Props = {
  info: ProjectInfo;
};

const Project = ({ info }: Props) => {
  const { projectName, data } = info;
  return (
    <article>
      <h1 className="text-3xl font-bold">{projectName}</h1>
      <h2 className="text-2xl font-bold mx-5 2xl:mx-auto">
        총 프로젝트: <span className="text-orange-400">{data?.length}</span>
      </h2>

      <div className="py-10 mx-5 2xl:mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((item: any, index: number) => (
          <Item data={item} key={index} />
        ))}
      </div>
    </article>
  );
};

export default Project;
