import React from 'react';
import jlogo from '../Images/jlogo.jpg';
import '../CSS/Welcome.css';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {


    render() {
        
        return (


        <div className="welcome">
            <div className="textbox">
                <img src={jlogo} alt="" className="logowelcome"/>
                <p className="intro"> Hello, I'm <span className="jonmon">Jonathan Montoya.</span></p>
                <p className="intro">I'm happy you're here!</p>
            </div>
            <Link to="/home" className="link-welcome">
                <button className="welcome-btn">
                    Lets Get Started!
                </button>
            </Link>
        </div>
        );
    }   

}