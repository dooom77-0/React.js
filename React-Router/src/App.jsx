import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Hello from './Hello'
import Home from './Home'

function App() {
  return (
    <>
      <Link to='/Hello'>
        <button>Hello</button>
      </Link>
      <Link to='/'>
        <button>Home</button>
      </Link>
      {/* <Routes> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Hello" element={<Hello/>}/>

      </Routes>
    </>
  )
}

export default App
