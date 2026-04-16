import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map((item, index) => (
        <>
          <TodoItem key={index} item={item} />
          <hr className={styles.line} />
        </>
      ))}
    </ul>
  );
}
