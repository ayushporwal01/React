export default function TodoList() {
  return (
    <div>
      <ul>
        {Todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
