import { useState } from "react";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([Todo]);
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
      {console.log(Todos)}
    </div>
  );
}
