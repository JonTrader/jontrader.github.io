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

                <Link to="/projects">
                    <img src={arrow} alt="" className="arrow-back"/>
                </Link>

                <img className="gif-htmlcss" src={project3} alt=""/>
                
            </div>
    );

    }

}