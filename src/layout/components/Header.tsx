import { useRef } from "react";
import Link from "next/link";
import { cls } from "base/utils";
import { ModeToggle, Sidebar } from ".";
import useAnimation from "../use-animation";

const Header = () => {
  const hamburger = useRef<HTMLDivElement>(null);
  const { sidebar, setSidebar, onClickSidebar, animate } = useAnimation({ target: hamburger.current });

  return (
    <>
      <header className={cls("fixed z-20 w-full", sidebar ? "bg-transparent/0 dark:bg-transparent/0 delay-300" : "")}>
        <div className="h-20 max-w-7xl mx-auto p-5 flex items-center justify-between">
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

          <div className="flex items-center">
            <nav className="flex-wrap items-center justify-center text-base hidden md:flex">
              <Link href={"/"}>
                <a className="mr-5">홈</a>
              </Link>
              <Link href={"/projects"}>
                <a className="mr-5">프로젝트</a>
              </Link>
            </nav>
            <ModeToggle />
            <div
              ref={hamburger}
              id="hamburger"
              className="h-6 w-6 flex flex-col justify-center items-center cursor-pointer md:hidden"
              onClick={() => onClickSidebar()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      {sidebar && <Sidebar animate={animate} closeSidebar={() => setSidebar(() => false)} />}
    </>
  );
};

export default Header;
