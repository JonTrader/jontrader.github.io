import React from 'react';
import Navigation from './Navigation';
import project1 from '../Images/project1.gif';
import project2 from '../Images/project2.gif';
import '../CSS/Projects.css';
import { Link } from "react-router-dom";

export default class reactProjects extends React.Component {

    render()
    {
        return (
            <div>
                <Navigation />
                <hr></hr>

                    <Link to="/projects" className="linkback">
                        <h2 className="back">Back To Projects</h2>
                    </Link>

                <a href="https://github.com/JonTrader/favlinks">
                    <img className="gifs" src={project1} alt=""/>
                </a>

                <a href="https://github.com/JonTrader/favlinks">
                    <img className="gifs" src={project2} alt=""/>
                </a> 
            </div>

        );
    }




}