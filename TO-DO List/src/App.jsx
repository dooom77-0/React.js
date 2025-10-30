import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('') // input value
  const [tasks, setTasks] = useState([]) // List value
  const inputStyle = {
    padding: '15px',
    margin: '10px',
    border: '5px solid teal',
    backgroundColor: '#cbcbcbff',
    borderRadius: '10px',
    color: '#000',
    width: '300px',
  }
  const taskList = tasks.map((task) => {
    return (
        <div>
          <div className="List">
            <li key={task.id}>{task.name}</li>
          <div>
            <button className='DELBtn' onClick={DELBtn}>🗑️</button>
            <button className='EditBtn'>✏️</button>
          </div>
          </div>
        </div>
      )
  })
  function AddTask() {
    if (value === '') {
      alert('Please add a task') 
      return
    }
    setTasks([...tasks, { id: tasks.length + 1, name: value }])
    setValue('')
  }
  function DELBtn() {
    
  }
  return (
    <div className='App'>
      <div>
        <h1>TO-DO List</h1>
      </div>
      <div className='Input Container'>
        <input className='Input' style={inputStyle} type="text" placeholder='Add a task...' value={value} onChange={(e) => setValue(e.target.value)} />
        <button className='Btn'
          onClick={AddTask}>Add</button>
      </div>
      <div>
        <ul>
          {taskList}
        </ul>
      </div>
    </div>
  )
}

export default App
