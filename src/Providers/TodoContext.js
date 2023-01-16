import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodo] = useState(JSON.parse(localStorage.getItem("todoskey")) || []);

    return (
        <TodoContext.Provider value={[todos, setTodo]}>
            {children}
        </TodoContext.Provider>
    )
}