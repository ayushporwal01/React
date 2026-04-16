import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.length == 0 ? (
        <h1 className={styles.noTasks}>No tasks added yet.</h1>
      ) : (
        todos.map((item, index) => (
          <>
            <TodoItem key={index} item={item} />
            <span>
              <button className={styles.deleteBtn}>X</button>
            </span>
            <hr className={styles.line} />
          </>
        ))
      )}
    </ul>
  );
}
