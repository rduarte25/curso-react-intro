import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((prev) => !prev);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
