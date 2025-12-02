import './About.css'
import {ReactTyped} from 'react-typed'
export default function About() {
  return (
    <div className="About" dir='ltr'>
        <div className="Text">
            <h1>About <span>Me</span></h1>
            <p>
              Hi, I'm Abdulrahman — a self-taught web developer passionate about building beautiful and functional websites.
              And always exploring new technologies.
            </p>

      </div>
      <div className="Profile">
        <img src='/profile2.jpeg' alt='profile' className='profile'/>      
            <h2><ReactTyped strings={['Front-End developer', 'Back-End developer(soon)', 'UI/UX designer(soon)','Python-programmer']} typeSpeed={50} backSpeed={50} loop /></h2>
      </div>
            
    </div>
  )
}
