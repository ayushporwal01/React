import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...Todos, Todo]);
    setTodo("");
  }
  return (
    <div>
      <ul>
        {Todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
