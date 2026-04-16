import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {

  const [Todos, setTodos] = useState([]);
 
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
