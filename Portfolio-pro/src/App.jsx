import Header from './Header/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Skills from './Skills/Skills.jsx'
import Contact from './Contact/Contact.jsx'
import Projects from './Projects/Projects.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
