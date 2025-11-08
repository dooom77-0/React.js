import './App.css'
import AyahViewer from './AyahViewer'
import { Route, Routes } from 'react-router-dom'
import Hello from './Hello'

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/AyahViewer" element={<AyahViewer />} />
          <Route path="*" element={<h1>404 {"Not Found"}</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
