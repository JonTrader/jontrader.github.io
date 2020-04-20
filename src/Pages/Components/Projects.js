import React from 'react';
import Navigation from './Navigation';
import react from '../Images/react.png';
import htmlcss from '../Images/htmlcss.png';
import '../CSS/Projects.css';
import { Link } from "react-router-dom";

export default class Projects extends React.Component {

    render() {
        
        return (
        <div>
            <Navigation />
            <hr></hr>

            <Link to="/projects/reactprojects" >
                <img className="projectsframes" src={react} alt=""/>
            </Link>

            <Link to="/projects/htmlcssproject" >
            <img className="projectsframes" src={htmlcss} alt=""/>
            </Link>
            
        </div>
        );
    }   

}