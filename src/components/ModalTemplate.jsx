import { useEffect, useRef } from "react";

export default function ModalTemplate({ modalOpen, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (modalOpen) return ref.current?.showModal();
    return ref.current?.close();
  }, [modalOpen]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}
