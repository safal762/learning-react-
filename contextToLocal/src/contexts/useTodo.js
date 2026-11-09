import React, { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"hello i will learn today ",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})

export const TodoProvider=TodoContext.Provider

export const UseTodo=()=>{
    return useContext(TodoContext)
}