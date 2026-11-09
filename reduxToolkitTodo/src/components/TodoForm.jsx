import React, { useState } from 'react'
import {useDispatch}  from 'react-redux'
import { addTodo } from '../feature/todoFeature'
function TodoForm() {
    let [input,setInput]=useState('')
    const dispatch=useDispatch() // used to send data to reducers 
    const handelTodo=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input)) // here we call reducer inside dispatch and send the value
    }
  return (
   <>
     <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter something..."
        className="border border-gray-400 rounded-md px-4 py-2 outline-none focus:border-blue-500"
        onChange={(e)=>{
            setInput(e.target.value)
        }}
      />

      <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
      onClick={handelTodo}>
        Add
      </button>
    </div>
   </>
  )
}

export default TodoForm