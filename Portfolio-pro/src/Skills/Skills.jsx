import React from 'react'
import './Skills.css'
export default function Skills() {
    const skills = [{ name: "Html5", level: "80%" },
    { name: "Css3",icon:"", level: "70%" },
    { name: "JavaScript",icon:"", level: "70%" },
    { name: "React",icon:"", level: "75%" },
    { name: "Python",icon:"", level: "65%" },
    { name:"Next.js",icon:"", level: "0%" },
    ]
  return (
    <div id='skills'>
        <div className='container'>
            <h1>My <span>Skills</span></h1>
            <div className='skills-list'>
                  {skills.map((skill,id) => {
                    return (
                        <div className='skill' key={id}>
                            <h3 className='skill-name'>{skill.name}</h3>
                            <div className='skill-level' style={{width:skill.level}}>
                                <div className='skill-level-fill' style={{ width: skill.level }} />
                            </div>
                        </div>
                    )
                    
                })}
                
            </div>
        </div>
        
    </div>
  )
}
