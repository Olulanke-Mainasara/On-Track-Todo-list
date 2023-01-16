import React from "react";
import MainTodoApp from "./Components/MainTodoApp";
import { TodoProvider } from "./Providers/TodoContext";
import "./Styles/App.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>On-Track: Todo-list</h1>

        <MainTodoApp />
      </div>
    </TodoProvider>
  );
}

export default App;
