import '../skills.css';
import reactlogo from '../images/reactlogo.png';
import jslogo from '../images/jslogo.png';
import mongodblogo from '../images/mongodblogo.png';
import pythonlogo from '../images/pythonlogo.jpg';
import htmllogo from '../images/htmlogo.png';
import csslogo from '../images/csslogo.png';
//import $ from 'jquery';
//import CircleType from "circletype";

function Skills() {

    // // const circleType = new CircleType(
    // //     document.getElementById("rotated")
    // // ).radius(80);
    // $(window).scroll(function() {
    //     var offset = $(window).scrollTop();
    //     offset = offset * 0.4;

    //     $(".skills").css({
    //         "-moz-transform" : "rotate(" + offset + "deg)",
    //         "-webkit-transform" : "rotate(" + offset + "deg)",
    //         "-o-transform" : "rotate(" + offset + "deg)",
    //         "-ms-transform" : "rotate(" + offset + "deg)",
    //         "transform" : "rotate(" + offset + "deg)",
    //     })
    // })

    return (
        <div id="skills">
            <h1>My Skills</h1>
            <div className="skill-list">
                <h1 className="skill-sections">Languages: JavaScript, Java, Python, C, C++, HTML, CSS.</h1>
                <h1 className="skill-sections">Applications: React (MERN stack), Angular, Vue.js, TailindCSS, SaSS, Apollo, GraphQL, Express, Express-Session, Express-Handlebars, Node.js, Postman, Insomnia, GraphQL.</h1>
                <h1 className="skill-sections">Databases: MongoDB, Robo 3t, Atlas, MySQL, Workbench, JAWSDB.</h1>
            </div>
            <div className="skill-imgs">
                <img src={htmllogo} alt="htmllogo" />
                <img src={csslogo} alt="csslogo" />
                <img src={jslogo} alt="jslogo" />
                <img src={reactlogo} alt="reactlogo" />
                <img src={pythonlogo} alt="pythonlogo" />
                <img src={mongodblogo} alt="reactlogo" />
            </div>
        </div>
    )
}
// HTML * CSS * JS * Express * NodeJS * React * Handlebars * Apollo * MongoDB * MySQL


export default Skills;
