import Link from "next/link";
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto flex items-center p-5">
        <Link href={"/"}>
          <a className="flex items-center font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-signature dark:bg-signature p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-3xl">Portfolio</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link href={"/"}>
            <a className="mr-5">홈</a>
          </Link>
          <Link href={"/projects"}>
            <a className="mr-5">프로젝트</a>
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
