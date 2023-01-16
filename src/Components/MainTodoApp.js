import React, { useContext, useState, useRef, useEffect } from "react";
import { TodoContext } from "../Providers/TodoContext";
import Itemholder from "./Itemholder";

function MainTodoApp() {
  const [todos, setTodo] = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todoskey", JSON.stringify(todos));
  }, [todos]);

  const inputBox = useRef();

  let [idNo, setNumber] = useState(1);

  // To add a to-do item
  function addTodo() {
    const inputValue = inputBox.current.value;

    if (inputValue === "") {
      alert("Oops, you didn't add any to-do item :)");
      inputBox.current.focus();
    } else {
      setTodo((prevtodos) => {
        return [
          ...prevtodos,
          {
            id: idNo,
            name: inputValue,
            completed: false,
            present: true,
          },
        ];
      });

      inputBox.current.value = null;

      setNumber(idNo + 1);
    }
  }

  // To complete a to-do item
  function changeStatus(id) {
    const newtodos = [...todos];
    const todo = newtodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodo(newtodos);
  }

  // To revert a to-do item in a case when a to-do has been completed but an edit is made to it
  function revertStatus(id) {
    const newtodos = [...todos];
    const todo = newtodos.find((todo) => todo.id === id);
    todo.complete = false;
    setTodo(newtodos);
  }

  // To delete a to-do item
  function deleteTodo(id) {
    const todosClone = [...todos];
    const todo = todosClone.find((todo) => todo.id === id);
    todo.present = !todo.present;
    const newtodos = todosClone.filter((todo) => todo.present);
    setTodo(newtodos);
  }

  // To update a to-do item
  function updateTodo(id, newname) {
    const todosClone = [...todos];
    const todo = todosClone.find((todo) => todo.id === id);
    todo.name = newname;
    setTodo(todosClone);
  }

  return (
    <>
      <div className="actions">
        <input type="text" ref={inputBox} placeholder="Enter a to-do" id="" />
        <button className="actionBtn" onClick={addTodo}>
          Add +
        </button>
      </div>

      <Itemholder
        todos={todos}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        revertStatus={revertStatus}
      />
    </>
  );
}

export default MainTodoApp;
