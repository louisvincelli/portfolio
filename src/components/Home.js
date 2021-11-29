import "../home.css";
//var { SocialIcon } = require('react-social-icons');
import { SocialIcon } from 'react-social-icons';

function Home() {
    return (
        <div className="home">
            <h1 className="hometitle">Louis Vincelli</h1>
            <div className="icons">
                <SocialIcon url="https://github.com/louisvincelli" className="github" target="_blank" />
                <SocialIcon url="https://www.linkedin.com/in/louis-vincelli-224940205/" className="linkedin" target="_blank" />
                <SocialIcon url="https://docs.google.com/document/d/1ehKqFrQAxc80e-JEaDWnqR7PA1f2A0DBlk-sovKkIXQ/edit" className="cv" target="_blank"/>
            </div>
        </div>
    )
}

export default Home;

{/* <SocialIcon url="https://github.com/louisvincelli" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/> */}
