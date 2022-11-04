import { useRef, useState, useEffect } from "react";

type Props = {
  target: HTMLDivElement | null;
};

const useAnimation = ({ target }: Props) => {
  const isVisible = useRef(true);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const onClickSidebar = () => {
    setAnimate(() => true);
    setTimeout(() => setAnimate(() => false), 250);
    isVisible.current = false;
  };

  useEffect(() => {
    if (!target) return;
    if (sidebar) {
      document.body.classList.add("modal-opened");
      target.classList.add("active");
    } else {
      document.body.classList.remove("modal-opened");
      target.classList.remove("active");
    }
  }, [sidebar, target]);

  useEffect(() => {
    if (!animate && !isVisible.current) setSidebar(prev => !prev);
  }, [animate]);

  return { sidebar, setSidebar, animate, onClickSidebar };
};

export default useAnimation;
