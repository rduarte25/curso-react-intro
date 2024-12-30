import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon />
      {/* <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={() => onCompleted(text)}
      >
        V
      </span> */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon />

      {/* <span className="Icon Icon-delete" onClick={() => onDelete(text)}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
