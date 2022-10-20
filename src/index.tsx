import React from "react";

import todos from "./todos.json";
import ReactDOM from "react-dom/client";
import Todo from "./Todo/todo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function showItem() {
  setInterval(() => {
    root.render(<Todo todos={todos} />);
  });
}
showItem();
