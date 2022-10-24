import Link from "next/link";
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <header className="body-font text-gray-600 bg-slate-300 dark:bg-zinc-700">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link href={"/"}>
          <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-yellow-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">찬건`s 포트폴리오</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link href={"/"}>
            <a className="mr-5 hover:text-gray-900">홈</a>
          </Link>
          <Link href={"/projects"}>
            <a className="mr-5 hover:text-gray-900">프로젝트</a>
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
