import Link from "next/link";
import Image from "next/image";
import { RootObject } from "interface/project";

type Props = {
  data: RootObject;
};

const Item = ({ data }: Props) => {
  const title: string = data.properties["name"].title[0].plain_text;
  const link: string = data.properties["link"].url;
  let introduce: string = data.properties["introduce"].rich_text[0].plain_text;
  introduce = introduce.replaceAll("\n", "\n\n");
  const cover = data.cover.external?.url || data.cover.file?.url || null;
  const tags: {
    id: string;
    name: string;
    color: string;
  }[] = data.properties["tag"].multi_select;
  const start = data.properties["date"].date.start;
  const end = data.properties["date"].date.end || null;

  return (
    // <div className="projects-card relative">
    //   <div className="w-full">
    //     {cover && (
    //       <Image
    //         className="rounded-t-xl"
    //         src={cover}
    //         width="100%"
    //         height="100%"
    //         alt="cover_image"
    //         layout="responsive"
    //         objectFit="fill"
    //         quality={100}
    //       />
    //     )}
    //   </div>

    //   <div className="flex flex-col gap-4 px-4 my-4">
    //     <h2 className="text-2xl font-bold">{title}</h2>
    //     <Link href={link}>
    //       <a target="_blank">GitHub</a>
    //     </Link>
    //     <h3>
    //       {start} ~ {end ? end : "진행 중"}
    //     </h3>
    //     <div className="flex items-center gap-3">
    //       {tags.map((tag, index) => (
    //         <span
    //           key={index}
    //           className={`rounded-md px-2 py-1 ${tag.color === "yellow" ? "bg-yellow-500" : "bg-red-700"}`}
    //         >
    //           {tag.name}
    //         </span>
    //       ))}
    //     </div>
    //     <h3 className="whitespace-pre-line">{introduce}</h3>
    //   </div>
    // </div>
    <Link href={link}>
      <a className="p-4 card">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full">
          {cover && (
            <div className="relative w-full h-40 mb-6 rounded overflow-hidden">
              <Image src={cover} alt="content" layout="fill" />
            </div>
          )}

          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">Project</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">{title}</h2>
          <p className="text-xs">
            {start} ~ {end ? end : "진행중"}
          </p>
          <p className="leading-relaxed text-base whitespace-pre-line">{introduce}</p>
        </div>
      </a>
    </Link>
  );
};

export default Item;
