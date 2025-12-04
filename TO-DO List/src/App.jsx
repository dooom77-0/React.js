import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [input, setInput] = useState('')

  // حفظ المهام في localStorage كلما تغيرت
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const AddTask = () => {
    if (input.trim()) {
      setTodos([...todos, {id: Date.now(), text: input, completed: false}])
      setInput('')
    }
  }

  return (
    <div className="App flex justify-center items-center h-screen w-screen bg-linear-to-r from-blue-500 to-emerald-400">
      <div className='bg-white shadow-lg rounded-3xl p-16'>
        <h1 className="text-black text-3xl text-center font-bold mb-6">REACT TODO LIST ✅</h1>

        <div className="mb-4 flex">
          <input type="text" placeholder='ادخل المهمة'
            className="flex grow placeholder:text-gray-500 px-3 py-2 border rounded-l-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600"
            onClick={AddTask}>إضافة</button>
        </div>

        <ul className="space-y-2">
          {
            todos.map((todo) => {
              return (
              <li
                key={todo.id}
                className='flex items-center p-3 rounded-lg border bg-slate-100 border-gray-200'>
                <input type="checkbox"
                checked={todo.completed}
                onChange={() => setTodos(todos.map((t) => {
                  return t.id === todo.id ? {...t, completed: !t.completed} : t
                }))}
                className='mr-2 h-5 w-5 text-blue-500'/>
                
                <span
                  className={`flex grow text-2xl ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>{todo.text}</span>
                
                <button onClick={() => setTodos(todos.filter((t) => {
                  return t.id !== todo.id
                }))}
                className='bg-red-500 ml-2 border-none p-2 rounded-lg text-white hover:bg-red-600'>Delete</button>
              </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
