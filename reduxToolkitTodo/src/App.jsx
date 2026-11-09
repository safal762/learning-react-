
import './App.css'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'

function App() {

 return (
  <div className="min-h-screen bg-gray-100 py-12 px-4">
    <div className="max-w-xl mx-auto">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Todo App
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <TodoForm />
        <Todo />
      </div>

    </div>
  </div>
)
}
export default App
