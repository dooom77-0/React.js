import './About.css'
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
            <img src='/profile2.jpeg' alt='profile' className='profile'/>      
    </div>
  )
}
