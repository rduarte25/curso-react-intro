import React, { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [todo, setTodo] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(todo);
  };

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setTodo(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        onChange={onChange}
        defaultValue={todo}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Anadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
