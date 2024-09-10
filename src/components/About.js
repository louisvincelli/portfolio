import '../about.css'
import aboutmeimg from '../images/img11.jpeg';
function About() {
    return (
        <div className="backgroundabout">
        <div className="about">
            <h1 className="aboutmetitle" id="aboutme"> About Me</h1>
            <h2>
                You dream it, 
                I create it!
            </h2>
            <p className="aboutme-content">
                Full-stack web developer with a background in Computer Science, Data Science, and Machine Learning / AI to to build creative, seamless, interactive and well-responsive user interfaces.
                Skilled in HTML, CSS, JavaScript, React.js (MERN) stack and more.
                As a motivated and enthusiastic learner with a passion for coding, I am known to be an effective problem solver and a team worker, bringing exceptional communication and initiative to get any job done. 
                I am looking forward to bringing my skills into a driven team to build better experiences on the web and mobile.
            </p>
        </div>
        <div className="aboutme-img">
            <img src={aboutmeimg} alt="aboutmeimg" />
        </div>
        </div>
    )
}

export default About;