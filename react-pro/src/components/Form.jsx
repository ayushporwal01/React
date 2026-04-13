import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input type="text" onChange={(e) => e.target.value} value={name} />
      </form>
    </div>
  );
}
