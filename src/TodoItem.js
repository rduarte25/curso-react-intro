import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={() => onCompleted(text)}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={() => onDelete(text)}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
