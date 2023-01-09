import React from 'react'
import Todoitem from "./todoItem"
import "./App.css"

function Itemholder({todos, changeStatus, deleteTodo, updateTodo, revertStatus,}) {
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

export default Itemholder