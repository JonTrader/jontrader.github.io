import React from 'react';
import jlogo from '../Images/j.png';
import '../CSS/Welcome.css';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {


    render() {
        
        return (


        <div className="welcome">
            <div className="welcome-box">
                <img src={jlogo} alt="" className="welcome-logo"/>
                <p className="intro-p"> Hello, I'm <span className="jonmon">Jonathan Montoya.</span></p>
                <p className="intro-p">I'm happy you're here!</p>
            </div>
            <Link to="/home" className="welcome-link">
                <button className="welcome-btn">
                    Lets Get Started!
                </button>
            </Link>
        </div>
        );
    }   

}