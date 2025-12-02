import { NavLink } from "react-router-dom"
import "./Header.css"
export default function Header() {
  return (
    <div className="header">
            <h1>
                 Port<span>folio</span>
            </h1>
            <h3 className="menu-icon">☰</h3>
          <nav>
            <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            <NavLink to="/About" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
            <NavLink to="/Contact" className={({isActive}) => isActive ? 'active-link' : ''}>Contact</NavLink>
            <NavLink to="/Projects" className={({isActive}) => isActive ? 'active-link' : ''}>Projects</NavLink>
            <NavLink to="/skills" className={({isActive}) => isActive ? 'active-link' : ''}>Skills</NavLink>
          </nav>
      
    </div>
  )
}
