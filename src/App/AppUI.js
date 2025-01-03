import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error...</p>}
        {!loading && searchedTodos.length === 0 && (
          <p>Crea tu primer TODO...</p>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={completeTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
