import { useState } from "react";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
