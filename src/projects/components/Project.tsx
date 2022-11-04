import { ProjectInfo } from "interface/project";
import { Item } from ".";

type Props = {
  info: ProjectInfo;
};

const Project = ({ info }: Props) => {
  const { projectName, data } = info;
  const projectTitle = projectName.split(" (-) ");
  const description = projectTitle[1] ? projectTitle[1].replaceAll("\\n", "\n") : null;
  return (
    <section>
      <div className="flex flex-wrap w-full mb-5">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium text-signature mb-2">{projectTitle[0]}</h1>
          <div className="h-1 w-20 bg-signature rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-opacity-90 whitespace-pre-line">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map(item => (
          <Item data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Project;
