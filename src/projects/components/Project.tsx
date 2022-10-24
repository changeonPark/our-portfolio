import Image from "next/image";
import { ProjectInfo } from "interface/project";
import { Item } from ".";

type Props = {
  info: ProjectInfo;
};

/**
 <h1 className="text-3xl font-bold">{projectName}</h1>
      <h2 className="text-2xl font-bold mx-5 2xl:mx-auto">
        총 프로젝트: <span className="text-orange-400">{data?.length}</span>
      </h2>

      

      <div className="py-10 mx-5 2xl:mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((item: any, index: number) => (
          <Item data={item} key={index} />
        ))}
      </div>
 */

const Project = ({ info }: Props) => {
  const { projectName, data } = info;
  const projectTitle = projectName.split(" (-) ");
  const description = projectTitle[1] ? projectTitle[1].replaceAll("\\n", "\n") : null;
  return (
    <section className="text-gray-400 body-font bg-primary">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">{projectTitle[0]}</h1>
            <div className="h-1 w-20 bg-yellow-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90 whitespace-pre-line">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {data?.map(item => (
            <Item data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
