import React from 'react'
import './About.css'
import about from '../../images/about.png'
const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg">

                </div>
                <div className="about-card">
                    <img src={about} alt="" className="about-img"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <p className="about-subtitle">
                I am Prasad Rupchand Patil , Dedicated and efficient Full stack web developer having sufficient experience and knowledge. 
                </p>
                <p className="about-description">
                An enthusiastic fresher with highly motivated and leadership skills pursuing bachelors of engineering degree in information Technology Engineering.Eager to learn new technologies and methodologies. Always willing to innovate the new things which can improve the existing technology for the betterment of the organisation. My hobbies are book and comic reading, watching movies and traveling
                </p>
                <div className="about-a">
                    <div about-a-resume>
                        <a className="about-resume" href="./Prasad_Resume.pdf" >Download resume</a>
                    </div>
                    <div about-a-github>
                        <a className="about-resume" target="_blank" href="https://github.com/BloodHoundPP">View github</a>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default About
