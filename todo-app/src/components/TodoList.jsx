import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      <ul>
        {todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
