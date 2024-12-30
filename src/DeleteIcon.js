import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="gray" onClink={onDelete} />;
}

export { DeleteIcon };
