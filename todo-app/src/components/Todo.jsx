import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
 
  return (
    <div>
      <Form todos={Todos} setTodos={setTodos} />
      <TodoList todos={Todos} />
    </div>
  );
}
