import React from 'react';
import Navigation from './Navigation';
import project3 from '../Images/project3.gif';
import arrow from '../Images/arrow.png';
import '../CSS/Projects.css';
import { Link } from "react-router-dom";

export default class HtmlCss extends React.Component {
    render()
    {

        return (
            <div>
                <Navigation />
                <hr></hr>

                <Link to="/projects" className="linkback">
                        <img src={arrow} alt="" className="arrow"/>
                        <h2 className="back">Back To Projects</h2>
                </Link>

                <a href="https://github.com/JonTrader/favlinks">
                    <img className="gifs" src={project3} alt=""/>
                </a> 
            </div>
    );

    }

}