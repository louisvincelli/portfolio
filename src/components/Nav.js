//import { IconName } from 'react-icons/fa';
//import * as FaIcons from 'react-icons/fa';
import '../hamburger.css';


function Nav() {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler"></input>
            <div className="hamburger"><div></div></div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#aboutme">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contactme">Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Nav;

{/* <>
            <div className="nav">
                <FaIcons.FaBars />
                          <span className="navbar-toggler-icon"></span>

            </div>
        
        </> */}

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <FaIcons.FaBars />
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#navbarSupportedContent">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme">Contact Me</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#navbarSupportedContent" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://pitchitadventures.herokuapp.com">Pitch It</a>
                <a className="dropdown-item" href="activity_htmls/rock_paper_scissors.html">Rock, Paper, Scissors</a>
                <a className="dropdown-item" href="activity_htmls/weather_app/index.html">Weather Dashboard</a>
                <a className="dropdown-item" href="activity_htmls/day_calendar/index.html">Day Calendar</a>
                <a className="dropdown-item" href="activity_htmls/quiz/index.html">Code Quiz</a>
                <a className="dropdown-item" href="https://nodejs-note-taker.herokuapp.com/">Node Server Note Taker</a>
                <a className="dropdown-item" href="https://mvc-style-burger-app.herokuapp.com">MVC Burger App</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://github.com/mandoosorio">GitHub Profile</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#navbarSupportedContent" tabindex="-1" aria-disabled="true">UCI Graduate</a>
            </li>
          </ul>
        </div>
    </nav> */}