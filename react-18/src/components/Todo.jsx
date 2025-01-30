import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="p-4 flex justify-between items-center bg-gray-600 w-full rounded my-2">
      <h2 className="text-xl text-white">{props.title}</h2>
      <div className="">
        <button
          type="button"
          className="text-lg bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
