import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [Todos, setTodos] = useState([]);
 
  return (
    <div>
      <Form todos={Todos} setTodos={setTodos} />
      <TodoList todos={Todos} />
    </div>
  );
}
