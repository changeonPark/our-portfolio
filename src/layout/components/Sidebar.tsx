import { cls } from "base/utils";
import { useEffect } from "react";

type Props = {
  closeSidebar: () => void;
  animate: boolean;
};

const Sidebar = ({ animate, closeSidebar }: Props) => {
  useEffect(() => {
    document.body.classList.add("modal-opened");
    return () => {
      document.body.classList.remove("modal-opened");
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 w-screen h-screen flex justify-center items-center z-10 overflow-y-auto">
      <div
        className={cls(
          "bg-light/10 dark:bg-dark/10 backdrop-blur-md w-full h-full transition duration-300 relative",
          "flex flex-col justify-center items-center gap-4",
          !animate ? "animate-sidebar-open" : "animate-sidebar-close"
        )}
        onClick={e => e.stopPropagation()}
      >
        괣뚧
      </div>
    </div>
  );
};

export default Sidebar;
