import React from 'react';
import logo from '../Images/laptop.jpg';
import '../CSS/Welcome.css';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {


    render() {
        
        return (
        
        <div className="welcome">
            <img src={logo} alt="" className="welcome-laptop"/>
                <Link to="/home" className="link-welcome">
                    <button className="welcome-btn">
                        Welcome
                    </button>
                </Link>
        </div>
        );
    }   

}