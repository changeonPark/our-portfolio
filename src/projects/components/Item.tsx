import Link from "next/link";
import Image from "next/image";
import { RootObject, _Tags } from "interface/project";

type Props = {
  data: RootObject;
};

const Item = ({ data }: Props) => {
  const title: string = data.properties["name"].title[0].plain_text;
  const link: string = data.properties["link"].url;
  let introduce: string = data.properties["introduce"].rich_text[0].plain_text;
  introduce = introduce.replaceAll("\n", "\n\n");
  const cover = data.cover ? data.cover.external?.url || data.cover.file?.url : null;
  const tags = data.properties["tag"].multi_select;
  const start = data.properties["date"].date.start;
  const end = data.properties["date"].date.end || null;

  return (
    <a className="card" href={link} target="_blank" rel="noopener noreferrer">
      {cover && (
        <div className="relative w-full h-40 mb-6 rounded overflow-hidden">
          <Image src={cover} alt="content" layout="fill" />
        </div>
      )}

      <h3 className="tracking-widest text-black dark:text-white text-xs font-medium title-font">Project</h3>
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      <p className="text-xs mb-2">
        {start} ~ {end ? end : "진행중"}
      </p>
      <div className="flex gap-1 text-xs flex-wrap mb-2">
        {tags.map(tag => (
          <span key={tag.id} className={`${_Tags[tag.color]} px-2 py-1 rounded-md text-white`}>
            {tag.name}
          </span>
        ))}
      </div>
      <p className="leading-relaxed text-sm whitespace-pre-line">{introduce}</p>
    </a>
  );
};

export default Item;
