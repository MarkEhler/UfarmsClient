import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ModalTemplate({ modalOpen, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (modalOpen) return ref.current?.showModal();
    return ref.current?.close();
  }, [modalOpen]);

  return createPortal(
    <dialog
      className="w-auto h-fit p-5 rounded-xl max-w-screen-sm"
      ref={ref}
      onCancel={closeModal}
    >
      {children}
      <button
        className="bg-white text-black px-6 py-4 rounded-xl"
        onClick={closeModal}
      >
        Close
      </button>
    </dialog>,
    document.body
  );
}
