import { useState, useEffect } from 'react'

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
      setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }])
      setInput('')
    }
  }

  return (
    <div className="App flex justify-center items-center min-h-screen w-screen bg-linear-to-r from-blue-500 to-emerald-400 p-4">
      <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 max-w-2xl w-full mx-auto">
        <h1 className="text-black text-2xl sm:text-3xl text-center font-bold mb-4">REACT TODO LIST ✅</h1>

        <div className="mb-4 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="ادخل المهمة"
            className="flex grow placeholder:text-gray-500 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && AddTask()}
          />
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 w-full sm:w-auto"
            onClick={AddTask}
          >
            إضافة
          </button>
        </div>

        <ul className="space-y-2 max-h-64 overflow-auto">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex items-center p-3 rounded-lg border bg-slate-100 border-gray-200 gap-3"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    setTodos(
                      todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
                    )
                  }
                  className="h-6 w-6 accent-green-500"
                />

                <span
                  className={`flex grow text-base md:text-2xl ${
                    todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
                  }`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                  className="bg-red-500 ml-2 p-2 rounded-lg text-white hover:bg-red-800 text-sm hover:scale-110 duration-300"
                >
                  🗑️
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
