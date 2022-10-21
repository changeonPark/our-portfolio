import Link from "next/link";
import Image from "next/image";

type Props = {
  data: any;
};

const Item = ({ data }: Props) => {
  const title: string = data.properties["이름"].title[0].plain_text;
  const github: string = data.properties["깃허브"].url;
  let description: string = data.properties["간단 설명"].rich_text[0].plain_text;
  description = description.replaceAll("\n", "\n\n");
  const src = data.cover.external?.url || data.cover.file?.url;
  const tags: {
    id: string;
    name: string;
    color: string;
  }[] = data.properties["태그"].multi_select;
  const start = data.properties["날짜"].date.start;
  const end = data.properties["날짜"].date.end;

  console.log("간단 설명", description);

  return (
    <div className="projects-card relative">
      <div className="w-full">
        <Image
          className="rounded-t-xl"
          src={src}
          width="100%"
          height="100%"
          alt="cover_image"
          layout="responsive"
          objectFit="fill"
          quality={100}
        />
      </div>

      <div className="flex flex-col gap-4 px-4 my-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link href={github}>
          <a target="_blank">GitHub</a>
        </Link>
        <h3>
          작업 기간:{" "}
          <span>
            {start} ~ {end}
          </span>
        </h3>
        <div className="flex items-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`rounded-md px-2 py-1 ${tag.color === "yellow" ? "bg-yellow-500" : "bg-red-700"}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <h3 className="whitespace-pre-line">{description}</h3>
      </div>
    </div>
  );
};

export default Item;
