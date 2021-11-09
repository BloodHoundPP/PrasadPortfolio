import React from 'react'
import './Skills.css'
import medal from '../../images/medal.png';
const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-bg"></div>
            <div className="skills-wrapper">
                <div className="skills-left">
                    <div className="bar">
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line html"><span></span></div>
                    </div>  
                    <div className="bar">
                        <div className="info">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line css"><span></span></div>
                    </div>  
                    <div className="bar">
                        <div className="info">
                            <span>JavaScript</span>
                        </div>
                        <div className="progress-line javascript"><span></span></div>
                    </div>  
                    <div className="bar">
                        <div className="info">
                            <span>React Js</span>
                        </div>
                        <div className="progress-line react"><span></span></div>
                    </div>  
                    <div className="bar">
                        <div className="info">
                            <span>Node Js</span>
                        </div>
                        <div className="progress-line node"><span></span></div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Python</span>
                        </div>
                        <div className="progress-line python"><span></span></div>
                    </div>  
                    <div className="bar">
                        <div className="info">
                            <span>Django</span>
                        </div>
                        <div className="progress-line django"><span></span></div>
                    </div> 
                    <div className="bar">
                        <div className="info">
                            <span>Java</span>
                        </div>
                        <div className="progress-line java"><span></span></div>
                    </div>  
                    <div className="bar">
                        <div className="info">
                            <span>Mongodb</span>
                        </div>
                        <div className="progress-line mongodb"><span></span></div>
                    </div>  

                </div>
                <div className="skills-right">
                    <h1 className="skills-title">My Skills</h1>
                    <p className="skills-description">
                        These are some of my skills. I am familiar with both frontend and backend developement. Also I am  pursuing IT Engineering in PICT college, Pune
                    </p>
                    <div className="skills-medal">
                        <img className="skills-medal-img" src={medal} alt="medal"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
