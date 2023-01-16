import React, { useContext } from "react";
import { TodoContext } from "../Providers/TodoContext";
import Todoitem from "./TodoItem";
import "../Styles/App.css";

function Itemholder({ changeStatus, deleteTodo, updateTodo, revertStatus }) {
  const [todos] = useContext(TodoContext);

  return (
    <div className="itemHolder">
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          sn={todo.id}
          name={todo.name}
          status={todo.complete}
          present={todo.present}
          changeStatus={changeStatus}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          revertStatus={revertStatus}
        />
      ))}
    </div>
  );
}

export default Itemholder;
