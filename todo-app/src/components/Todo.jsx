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
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={Todo}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {Todos.map((item) => (
          <TodoItem item={item.text} />
        ))}
      </ul>
    </div>
  );
}
