import { useEffect } from "react";
import danger_icon_src from "../assets/danger-svgrepo-com.svg";
function Modal({ onCancel, onConfirm }) {
  const cancelHandler = () => {
    onCancel();
  };

  const confirmHandler = () => {
    onConfirm();
  };

  useEffect(() => {
    let timeout = setTimeout(() => onCancel(), 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="fixed z-20 top-[20vh] w-[20rem] left-[calc(50%-10rem)] items-center bg-white border-1 rounded-lg shadow-md p-4 text-center">
      <img
        src={danger_icon_src}
        alt="Danger Icon"
        className="inline-block w-20 my-3"
      />
      <h3 className="block text-lg my-3">Are you sure?</h3>
      <div className="flex justify-around w-full">
        <button
          type="button"
          onClick={cancelHandler}
          className="text-lg bg-white text-gray-900 px-4 py-2 rounded cursor-pointer border-1"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={confirmHandler}
          className="text-lg text-red-600 border-1 border-red-600 px-4 py-2 rounded cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Modal;
