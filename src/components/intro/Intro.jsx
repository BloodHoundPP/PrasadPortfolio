import './Intro.css';
import me from '../../images/portfolio.png';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-introduction">Hello, My name is</h2>
                    <h1 className="intro-name">Prasad Patil</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Front-end Developer</div>
                            <div className="intro-title-item">Back-end Developer</div>
                            <div className="intro-title-item">Freelancer</div>
                            <div className="intro-title-item">Blogger</div>
                            <div className="intro-title-item">writer</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        I am full stack web-developer and also a freelancer. I design and develope stylish as well as responsive websites for customers. This is my small portfolio , don't forgot to give me feedback.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-background"></div>
                <img className="intro-img" src={me} alt="my-img"/>
            </div>
        </div>
    )
}

export default Intro
