import React from "react";
import "./todo.css";

function Todo(props: any) {
  const todos = props.todos;
  console.log(todos);
  return (
    <ul>
      {todos.map((item: any, index: number) => (
        <li key={index} className={item.completed ? "completed" : ""}>
          Element: {item.title}
        </li>
      ))}
    </ul>
  );
}

export default Todo;
