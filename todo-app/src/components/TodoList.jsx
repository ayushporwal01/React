import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));
  return (
    <ul className={styles.list}>
      {todos.length == 0 ? (
        <h1 className={styles.noTasks}>No tasks added yet.</h1>
      ) : (
        todos.map((item, index) => (
          <>
            <TodoItem
              key={item.name}
              item={item}
              todos={todos}
              setTodos={setTodos}
            />
            <hr className={styles.line} />
          </>
        ))
      )}
    </ul>
  );
}
