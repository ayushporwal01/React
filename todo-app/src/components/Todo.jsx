import { useState } from "react";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <input type="text" value={Todo} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
