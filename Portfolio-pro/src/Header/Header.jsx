import { NavLink } from "react-router-dom"
import "./Header.css"
import { useState } from "react"
export default function Header() {
  const [open, setOpen] = useState(false)
  
  const closeMenu = () => {
    setOpen(false)
  }
  return (
    <div className="header">
            <h1>
                 Port<span>folio</span>
            </h1>
            <h3 className="menu-icon" onClick={() => setOpen(!open)}>☰</h3>
          <nav className={open ? 'nav-links active' : 'nav-links'}> 
            <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            <NavLink to="/About" onClick={closeMenu} className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
            <NavLink to="/Contact" onClick={closeMenu} className={({isActive}) => isActive ? 'active-link' : ''}>Contact</NavLink>
            <NavLink to="/Projects" onClick={closeMenu} className={({isActive}) => isActive ? 'active-link' : ''}>Projects</NavLink>
            <NavLink to="/skills" onClick={closeMenu} className={({isActive}) => isActive ? 'active-link' : ''}>Skills</NavLink>
          </nav>
      
    </div>
  )
}
