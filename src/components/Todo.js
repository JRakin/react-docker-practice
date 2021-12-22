import React, { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  return (
    <div>
      {todos.map((item) => (
        <div
          style={{
            padding: "10px 20px",
            margin: "10px",
            boxShadow: "2px 2px 12px lightgray",
          }}
        >
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Todo;
