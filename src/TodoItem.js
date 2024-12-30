import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={completed}
        onComplete={() => onCompleted(text)}
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={() => onDelete(text)} />
    </li>
  );
}

export { TodoItem };
