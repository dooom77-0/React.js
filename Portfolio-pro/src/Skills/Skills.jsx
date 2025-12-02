import React from 'react'
import './Skills.css'
export default function Skills() {
    const skills = [{ name: "Html5",icon:"/Icons/html.svg", level: "90%" },
    { name: "Css3",icon:"/Icons/css-3.svg", level: "65%" }, 
    { name: "JavaScript",icon:"/Icons/js.svg", level: "70%" },
    { name: "React",icon:"/Icons/science.svg", level: "70%" },
    { name: "Python",icon:"/Icons/python.svg", level: "60%" },
    { name:"Next.js",icon:"/Icons/nextjs.svg", level: "0%" },
    ]
  return (
    <div id='skills' className='skills'>
        <div className='container'>
            <h1>My <span>Skills</span></h1>
            <div className='skills-list'>
                  {skills.map((skill,id) => {
                    return (
                        <div className='skill' key={id}>
                            <h3 className='skill-name'>{skill.name} <img src={skill.icon} width='25px'/></h3>
                            <div className='skill-level'>
                                <div className='skill-level-fill' style={{ width: skill.level }} />
                            </div>
                            <h3 className='skill-level-text'>{skill.level}</h3>
                        </div>
                    )
                    
                })}
                
            </div>
        </div>
        
    </div>
  )
}
