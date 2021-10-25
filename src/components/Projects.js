import img from '../images/codingimg.jpeg';
import ballfinder from '../images/ballfindersc.png';
import weatherapp from '../images/weatherappsc.png';
import workouttracker from '../images/workouttrackersc.png';
import delicioso from '../images/deliciososc.png';
import dayplanner from '../images/dayplannersc.png';
import varcade from '../images/varcade.png';


function Projects() {
    return(
        <div className="container">
        <h1 className="projectstitle" id="projects"> My Projects</h1>
        <h2 className="projectsdescription">(Click on the project's image to go to their deployed application)</h2>
        <div className="project row">
        <div className="col-sm-4">
        <div className="card">
        <a href="https://louisvincelli.github.io/Ballfinder/" target="_blank" rel="noreferrer"><img src={ballfinder} className="card-img-top" alt="..."></img></a>
            <div className="card-body">
                <p className="card-text">A search engine for sports addict! Using an API it finds your favorite sports teams upcoming matches as well as information on the matches including stadium, capacity, and who they are facing! </p>
                <p className="card-text"><a href="https://github.com/louisvincelli/Ballfinder" target="_blank" rel="noreferrer">Github Repo</a></p>
            </div>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
        <a href="https://louisvincelli.github.io/weatherDashboard/" target="_blank" rel="noreferrer"><img src={weatherapp} className="card-img-top" alt="..."></img></a>
            <div className="card-body">
                <p className="card-text">A forecast application that makes an API call and tells you the temperature, humidity, wind speed, and uv index of the present day and 5 upcoming days on any city you search!</p>
                <p className="card-text"><a href="https://github.com/louisvincelli/weatherDashboard" target="_blank" rel="noreferrer">Github Repo</a></p>
            </div>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
            <a href="https://fast-meadow-28304.herokuapp.com/" target="_blank" rel="noreferrer"><img src={workouttracker} className="card-img-top" alt="..."></img></a>
            <div className="card-body">
                <p className="card-text">A workout tracker deployed using mongodb that lets you track the amount of work you put in the gym!</p>
                <p className="card-text"><a href="https://github.com/louisvincelli/WorkoutTracker" target="_blank" rel="noreferrer">Github Repo</a></p>
            </div>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
        <a href="https://delicat-bastille-97120.herokuapp.com/login" target="_blank" rel="noreferrer"><img src={delicioso} className="card-img-top" alt="..."></img></a>
            <div className="card-body">
                <p className="card-text">An MVC Project deployed with JAWSDB that searches for recipes based on the items saved in your virtual fridge. You may also like recipes and save them in your profile along with a search history!</p>
                <p className="card-text"><a href="https://github.com/louisvincelli/Delicioso" target="_blank" rel="noreferrer">Github Repo</a></p>
            </div>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
        <a href="https://louisvincelli.github.io/dayplanner/" target="_blank" rel="noreferrer"><img src={dayplanner} className="card-img-top" alt="..."></img></a>
            <div className="card-body">
                <p className="card-text">A single page application made using node.js and moment.js that lets you plan your day by saving, deleting and reminding you of events throughout the day!</p>
                <p className="card-text"><a href="https://github.com/louisvincelli/dayplanner" target="_blank" rel="noreferrer">Github Repo</a></p>
            </div>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="card">
        <a href="https://varcadex.herokuapp.com" target="_blank" rel="noreferrer"><img src={varcade} className="card-img-top" alt="..."></img></a>
            <div className="card-body">
                <p className="card-text">A MERN stack application that allows the user to experience an arcade like its the 80's! With different games in a single machine you can play whatever you feel like. Game on!</p>
                <p className="card-text"><a href="https://github.com/louisvincelli/varcade" target="_blank" rel="noreferrer">Github Repo</a></p>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Projects;