import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function deleteTask(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function completeTask(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(newArray);
  }
  
  const markCompleted = item.done ? styles.completed : "" 
  return (
    <div className={styles.item}>
      <li className={styles.markCompleted} onClick={(e) => completeTask(item.name)}>{item.name}</li>
      <button onClick={(e) => deleteTask(item)} className={styles.deleteBtn}>
        x
      </button>
    </div>
  );
}
