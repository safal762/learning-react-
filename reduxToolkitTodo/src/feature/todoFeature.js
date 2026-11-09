import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
   todos: [
  {
        id:1,
        text:"hello world"
    }
]
}
// here features are called slice and to make one we need mainly three things a name,initialState and reducers here the reducers are defined 
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{ // state holds the value of updated iniital state from store // basically it sotres values 
            const todo={ // action holds the id ,text 
                id:nanoid(),  // nanoid creates a random string id imported from redux
                text:action.payload  
            }
            state.todos.push(todo) // need to push after the changes are made 
        },

        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> (
               todo.id != action.payload 
            ))
        }
    }
})

export const{addTodo,removeTodo} = todoSlice.actions // we export every reducer because we dont know in which components do we need to use that reducer

export default todoSlice.reducer // needed to pass inside store 