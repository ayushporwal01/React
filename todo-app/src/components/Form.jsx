import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name: "", completed: false});
  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
    setTodo({name: "", completed: false});
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input
          className={styles.todoInput}
          onChange={(e) => setTodo({name: e.target.value, completed: false})}
          type="text"
          placeholder="Enter a Task..."
          value={todo.name}
        />
        <button className={styles.addBtn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
