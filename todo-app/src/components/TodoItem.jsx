import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function deleteTask(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <li>{item.name}</li>
      <button onClick={(e) => deleteTask(item)} className={styles.deleteBtn}>
        x
      </button>
    </div>
  );
}
