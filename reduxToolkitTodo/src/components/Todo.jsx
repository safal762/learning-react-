
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todoFeature'

function Todo() {
    const todos = useSelector((state) => state.todos) // we get value using the useselector and we get acess of state inside useSelector
    const dispatch = useDispatch() // for sending the value
    return (
        <div className="max-w-lg mx-auto mt-8 p-5 bg-white rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold text-gray-800 mb-5">
                My Todos
            </h2>

            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                
                        key={todo.id}
                        className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                    >
                        <span className="text-gray-700 font-medium">
                            {todo.text}
                        </span>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1.5 rounded-md transition"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>


        

        </div>
    )
}

export default Todo
