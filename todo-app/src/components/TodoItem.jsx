import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function deleteTask(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function completeTask(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  return (
    <div className={styles.item}>
      <li onClick={(e) => completeTask(item.name)}>{item.name}</li>
      <button onClick={(e) => deleteTask(item)} className={styles.deleteBtn}>
        x
      </button>
    </div>
  );
}
