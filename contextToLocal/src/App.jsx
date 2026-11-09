import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/index'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  let [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => {
      return (
        [{ id: Date.now(), ...todo }, ...prev]
      )
    })
  }

  const updateTodo=(id,todo)=>{
      setTodos((prev)=>{
       return prev.map((prevTodos)=>{
          return prevTodos.id === id ? todo : prevTodos
        })
      })
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>{
       return prev.filter((prevTodos)=>{
          return prevTodos.id != id
        })
    })
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>{
    return  prev.map((prevTodos)=>{
        return (
          prevTodos.id === id? {...prevTodos,completed:!prevTodos.completed} : prevTodos
        )
      })
    })
  }

  useEffect(()=>{
   const   Todos=JSON.parse(localStorage.getItem("todos"))
   if(Todos && Todos.length>0){
    setTodos(Todos)
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map(function(todo){
                  return (
                    <div key={todo.id} 
                    className='w-full'>
                    <TodoItem todo={todo}/> 
                    </div>
                  )
              })
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
