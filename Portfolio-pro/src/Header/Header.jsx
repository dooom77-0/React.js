import { NavLink } from "react-router-dom"
import "./Header.css"
export default function Header() {
  return (
    <div className="header">
            <h1>
                 Port<span>folio</span>
            </h1>
          <nav>
            <NavLink to="/" className={window.location.pathname === '/'? 'active-link' : ''}>Home</NavLink>
            <NavLink to="/About" className={window.location.pathname === '/About'? 'active-link' : ''}>About</NavLink>
            <NavLink to="/Contact" className={window.location.pathname === '/Contact'? 'active-link' : ''}>Contact</NavLink>
            <NavLink to="/Projects" className={window.location.pathname === '/Projects'? 'active-link' : ''}>Projects</NavLink>
            <NavLink to="/skills" className={window.location.pathname === '/skills'? 'active-link' : ''}>Skills</NavLink>
            
          </nav>
      
    </div>
  )
}
