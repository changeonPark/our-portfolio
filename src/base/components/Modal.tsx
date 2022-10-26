import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  closeModal: () => void;
  children: React.ReactNode;
};

const Modal = ({ closeModal, children }: Props) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById("root-modal");
      ref.current = dom; // ref에 dom 값 전달
      document.body.classList.add("modal-opened");
      return () => {
        document.body.classList.remove("modal-opened");
      };
    }
  }, []);
  if (ref.current && mounted) {
    // mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
    return createPortal(
      <div
        onClick={closeModal}
        className="fixed top-0 right-0 bg-black/80 w-screen h-screen flex justify-center items-center z-10 overflow-y-auto"
      >
        {children}
      </div>,
      ref.current
    );
  }
  return null;
};

export default Modal;
