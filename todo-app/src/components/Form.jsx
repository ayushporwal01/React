import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input
          className={styles.todoInput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter a Task..."
          value={todo}
        />
        <button className={styles.addBtn} type="submit">Add</button>
      </form>
    </div>
  );
}
