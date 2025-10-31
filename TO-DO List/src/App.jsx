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
   function AddTask() {
    if (value === '') {
      alert('Please add a task') 
      return
    }
    const newTask = { id: Date.now(), name: value }
    setTasks([...tasks, newTask])
     setValue('')
  }
  function DELBtn(id) {
    const newTask = tasks.filter((task) => { return task.id !== id });
    setTasks(newTask)
    
  }


  const taskList = tasks.map((task) => {
    return (
      <div className='Task'>
        <div className='checkbox'>
          <input type='checkbox' />
        </div>
        <div className="List">
            <li key={task.id}>{task.name}</li>
          <div>
            <button className='DELBtn' onClick={() => { DELBtn(task.id) }}>🗑️</button>
          </div>
          </div>
        </div>
      )
  })
 
  return (
    <div className='App'>
      <div className='Containers'>
        <div>
          <p>This is a preliminary version of TO-DO List</p>
          <h1>TO-DO List📝</h1>
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
    </div>
  )
}

export default App
