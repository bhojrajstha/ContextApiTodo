import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        Id:1,
        Todo:"todo msg",
        checked: false,
    }],
    addTodo: (todo) => {},
    updateTodo:(Id,todo) =>{},
    deleteTodo: (Id) => {},
    toggleChecked: (Id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}