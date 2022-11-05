import Link from "next/link";
import Animation from "./Animation";

const Hero = () => {
  const introduce = ["Changeon Park", "FE Developer"];

  return (
    <section className="text-light dark:text-dark flex flex-col px-3">
      <article className="flex flex-col gap-2 md:gap-4">
        <p className="text-base md:text-2xl">방문해 주셔서 감사합니다!</p>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-accent flex gap-2">
          <span>I`am</span>
          <div className="relative md:min-w-[300px] lg:min-w-[500px]">
            {introduce.map(item => (
              <span
                key={item}
                className="text-primary opacity-0 absolute top-0 left-0 animate-bottomTotop last:animation-delay whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </h1>
      </article>

      {/* <article>
        <Animation />
      </article> */}
    </section>
  );
};

{
  /* <button className="flex justify-center items-center p-2 w-fit bg-primary rounded-md text-xs md:text-sm text-white">
          <Link href={"/projects"}>
            <a>프로젝트 보러가기</a>
          </Link>
        </button> */
}

export default Hero;
