import React from 'react';
import Navigation from './Navigation';
import project1 from '../Images/project1.gif';
import '../CSS/Projects.css';

export default class Projects extends React.Component {

    render() {
        
        return (
        <div>
            <Navigation />
            <a href="https://github.com/JonTrader/design-pad">
                <img className="gifs" src={project1} alt=""/>
            </a>
            
            <div className="gifs"></div>
            <div className="gifs"></div>
        </div>
        );
    }   

}