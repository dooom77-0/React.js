import './Projects.css'
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ayah Viewer",
      description: "A web app that allows users to view different ayahs of the Quran with thier meanings ",
      image: "/projects/Quran.jpg",
      tags: ["JS", "Html5", "CSS3"],
      link: "https://random-ayat-d7.pages.dev/",
      github: "https://github.com/dooom77-0/html-projects/blob/main/%D8%A2%D9%8A%D8%A7%D8%AA%20%D9%82%D8%B1%D8%A2%D9%86%D9%8A%D8%A9%20%F0%9F%95%8C%F0%9F%95%8B%F0%9F%A4%B2%F0%9F%8C%99/index.html"
    },
    {
      id: 2,
      title: "My first project",
      description: "My old portfolio made with Html and Css",
      image: "/projects/Portfolio old.png",
      tags: [ "CSS3", "Html5"],
      link: "https://my-own-site-k7k.pages.dev/",
      github: "https://github.com/dooom77-0/html-projects/blob/main/my%20own%20website%20%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB/index.html"
    },
    {
      id: 3,
      title: "Sunnah App",
      description: "A web app that allows users to view different hadiths with thier meanings",
      image: "/projects/Hadith_Books.jpg",
      tags: ["React", "CSS3", "JSON"],
      link: "https://sunnah-app-d7.pages.dev/",
      github:"https://github.com/dooom77-0/React.js/blob/main/Sunnah-App/src/App.jsx"
    },
    {
      id: 4,
      title: "Memory game",
      description: "A web app that allows users to play a memory game",
      image: "/projects/brain2.jpg",
      tags: ["Html5", "CSS3", "JS"],
      link: "https://memory-game-d7.pages.dev/",
      github:"https://github.com/dooom77-0/html-projects/blob/main/memory%20game%20%F0%9F%A7%A0/index.html"
    },
  ]
  return (
    <div className='Projects'>
      <div className='container'>
        <h1>Featured <span>Projects</span></h1>

        <p className='desc1'>Here are some of my favorite projects. Each project is a unique opportunity to showcase my skills and creativity.<br /><span>if you want to see more projects go to my old portfolio below</span></p>

        <div className='projects-container'>
          {projects.map((project, key) => {
            return (
              <div key={key} className='project-card'>
              <div className='project-img'>
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className='tags-con'>
                <div className='tags'>
                  {project.tags.map((tag, key) => {
                    return (
                      <span key={key}>{tag}</span>
                    )
                  })}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p className='desc'>{project.description}</p>
                <div className='btns-con'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
            )
            
          })}
        </div>
        <div className='github-link-con'>
          <a href="https://github.com/dooom77-0" target="_blank" rel="noopener noreferrer"
          className='github-link'>Check my Github </a>
        </div>
      </div>
    </div>
  )
}
