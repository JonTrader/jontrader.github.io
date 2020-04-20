import React from 'react';
import Navigation from './Navigation';
import project1 from '../Images/project1.gif';
import project2 from '../Images/project2.gif';
import arrow from '../Images/arrow.png';
import '../CSS/Projects.css';
import { Link } from "react-router-dom";

export default class reactProjects extends React.Component {

    render()
    {
        return (
            <div>
                <Navigation />
                <hr></hr>

                    <Link to="/projects">
                    <img src={arrow} alt="" className="arrow-back"/>
                    </Link>

                <a href="https://github.com/JonTrader/favlinks">
                    <img className="gifs-react" src={project1} alt=""/>
                </a>

                <a href="https://github.com/JonTrader/favlinks">
                    <img className="gifs-react" src={project2} alt=""/>
                </a> 
            </div>

        );
    }




}