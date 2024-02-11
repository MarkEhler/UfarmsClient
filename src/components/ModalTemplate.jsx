import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
// import useOutsideClick from "../hooks/useOutsideClick";

export default function ModalTemplate({ modalIsOpen, closeModal, children }) {
  const ref = useRef();

  // useOutsideClick(ref, () => ref.current?.close());

  useEffect(() => {
    if (modalIsOpen) return ref.current?.showModal();
    return ref.current?.close();
  }, [modalIsOpen]);

  return createPortal(
    <dialog
      className="w-auto h-fit rounded-xl max-w-screen-sm"
      ref={ref}
      onCancel={closeModal}
    >
      <header className="flex justify-end rounded-t-xl bg-white h-10">
        <button
          className="bg-white text-black text-3xl font-extrabold max-h-5 px-3 align-middle"
          onClick={closeModal}
        >
          &times;
        </button>
      </header>

      <div className="flex flex-col p-5">{children}</div>
    </dialog>,
    document.body
  );
}
