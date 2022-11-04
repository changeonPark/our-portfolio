import Link from "next/link";
import Animation from "./Animation";

const Hero = () => {
  return (
    <section className="text-light dark:text-dark flex flex-col md:flex-row justify-center md:items-center px-3">
      <article className="flex flex-col gap-2 md:gap-4 md:w-1/2 shrink-0">
        <h1 className="text-base md:text-2xl">
          안녕하세요,
          <br />
          <span className="text-primary">FE Developer</span> 박찬건입니다
        </h1>
        <h2 className="text-sm md:text-xl">현재 Altava Group에 재직중입니다</h2>

        <button className="flex justify-center items-center p-2 w-fit bg-primary rounded-md text-xs md:text-sm text-white">
          <Link href={"/projects"}>
            <a>프로젝트 보러가기</a>
          </Link>
        </button>
      </article>

      <article>
        <Animation />
      </article>
    </section>
  );
};

export default Hero;
