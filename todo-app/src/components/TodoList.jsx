import TodoItem from "./TodoItem";

export default function TodoList({ Todos }) {
  return (
    <div>
      <ul>
        {Todos?.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
