import React, { useRef, useState } from 'react'

function Todoitem(props) {
  // To complete a to-do
  const status = props.status

  function changeStatus() {
    props.changeStatus(props.sn)
  }


  // To delete a to-do
  function deleteTodo() {
    props.deleteTodo(props.sn)
  }


  //To update a to-do
  const [inUpdateMode, setMode] = useState(false)

  function enableUpdate() {
    setMode(!inUpdateMode)
  }

  const initialName = useRef()
  const updateBox = useRef()

  function updateTodo() {
    const updateBoxValue = updateBox.current.value

    if (updateBoxValue === "") {
      alert("Oops, you didn't enter an edit for the to-do item :)")
      updateBox.current.focus()
    } else {
      initialName.current.value = updateBoxValue

      props.updateTodo(props.sn, updateBoxValue)

      setMode(!inUpdateMode)

      props.revertStatus(props.sn)

      updateBox.current.value = null
    }
  }


  // Render----------------------------------
  return (
    <>
      <div className={`todoItem ${status ? "done" : ""} ${inUpdateMode ? "inUpdate" : ""}`}>
          <div className='todoText' ref={initialName} defaultValue={props.name}>
            <p>{props.name}</p>
          </div>

          <div className="actionBtns">
            <i title="Close edit panel" onClick={enableUpdate} className="fa-solid fa-xmark"></i>
            <i title="Edit to-do item" onClick={enableUpdate} className="fa-solid fa-pen-to-square"></i>
            <i title="Unfinish to-do item" onClick={changeStatus} className="fa-solid fa-rotate-left"></i>
            <i title="Finish to-do item" onClick={changeStatus} className="fa-solid fa-check"></i>
            <i title="Delete to-do item" onClick={deleteTodo} className="fa-solid fa-trash"></i>
          </div>
      </div>

      <div className={`update ${inUpdateMode ? "inUpdate" : ""}`}>
        <input type="text" ref={updateBox} placeholder="Enter the edit" autoComplete="off"/>
        <button className='actionBtn' onClick={updateTodo}>Edit <i className="fa-solid fa-pen"></i></button>
      </div>
    </>
  )
}

export default Todoitem