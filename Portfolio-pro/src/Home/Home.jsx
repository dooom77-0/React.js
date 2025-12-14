import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom';
export default function Home() {

  return (
    <div className="Home" dir='rtl'>
      <div className="text" dir='ltr'>
        <h2>Hi, it's <span style={{color:"rgba(0, 198, 198, 1)"}}>Abdulrahman</span></h2>
        <h1>I'm a <span className='typing' style={{ color: "rgba(0, 198, 198, 1)", textShadow: "0 0 5px rgba(0, 198, 198, 1)" }} >
        
        <ReactTyped strings={['Front-End developer', 'Back-End developer(soon)', 'UI/UX designer(soon)','Python-programmer']} typeSpeed={50} backSpeed={50} loop /></span></h1>
        <h3 className='info'>I'm a web developer with a passion for creating beautiful and functional websites.</h3>
        <div className="icons">
          {/* Github */}
          <a href='https://github.com/dooom77-0?tab=repositories' 
          target='_blank' 
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='1x' className='github' />
          </a>
          {/* Github */}

          {/* Instagram */}
          <a href='https://www.instagram.com/636_abdulrahman/' 
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} size='1x' className='insta' />
          </a>
          {/* Instagram */}

          {/* Email */}
          <a href="mailto:dooomww@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="1x" className="email" />
          </a>
          {/* Email */}


        </div>
        <div className="btns">
          <Link to="/Contact" className='btn'>
            <button className='Contact-btn'>
              contact me
            </button>
          </Link>
        </div>
      </div>
        <img src='/profile2.jpeg' alt='profile' className='profile' />
    </div>
  )
}
