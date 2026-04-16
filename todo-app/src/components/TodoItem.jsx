import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos }) {
  function deleteTask(item, todos) {
      todos.filter(item => ) 
  }
  return (
    <div className={styles.item}>
      <li>{item}</li>
      <button onClick={(e) => deleteTask(item)} className={styles.deleteBtn}>x</button>
    </div>
  );
}
