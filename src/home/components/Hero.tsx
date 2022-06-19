import Link from "next/link"
import Animation from "./Animation"

const Hero = () => {
  return (
    <>
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
        <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
          안녕하세요, 박찬건입니다
          <br className="hidden lg:inline-block" />
          FE 개발자로 일하고 있습니다
        </h1>
        <div className="flex justify-center">
          <Link href={"/projects"}>
          <a className="inline-flex rounded border-0 bg-yellow-600 py-2 px-6 text-lg text-white hover:bg-yellow-600 focus:outline-none">
            프로젝트 보러가기
          </a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <Animation />
      </div>
    </>
  )
}

export default Hero
