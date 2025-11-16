import {Route,Routes,Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/About" element={<h1>About</h1>} />
        <Route path="/Contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>404 {"Not Found"}</h1>} />
      </Routes>
      </div >
    </>
  )
}

export default App
