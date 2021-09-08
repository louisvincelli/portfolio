import '../skills.css';
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
                <ul>
                    <li>HTML</li>
                    <li>*</li>
                    <li>CSS</li>
                    <li>*</li>
                    <li>JS</li>
                    <li>*</li>
                    <li>Nodejs</li>
                    <li>*</li>
                    <li>Express</li>
                    <li>*</li>
                    <li>React</li>
                    <li>*</li>
                    <li>HandleBars</li>
                    <li>*</li>
                    <li>Apollo / GraphQL</li>
                    <li>*</li>
                    <li>MongoDB</li>
                    <li>*</li>
                    <li>MySQL</li>
                </ul>
            </div>
        </div>
    )
}
// HTML * CSS * JS * Express * NodeJS * React * Handlebars * Apollo * MongoDB * MySQL


export default Skills;
