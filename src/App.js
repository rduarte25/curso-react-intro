import React, { useState } from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de introduccion a React Js", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Cortar cebolla 1", completed: true },
//   { text: "Cortar cebolla 2", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos = [];
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  }
  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos) || [];
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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

export default App;
