import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        value={todo}
      />
      <button type="submit">Add</button>
    </form>
  );
}
