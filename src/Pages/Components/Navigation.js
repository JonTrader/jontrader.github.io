import React from 'react';
import jlogo from '../Images/j.png';
import '../CSS/Navigation.css';
import { Link } from "react-router-dom";

export default function Nav()
{
    return (
        <header className="nav-bar">
            <div className="nav-box">
               <Link to="/home">
                  <img src={jlogo} className="nav-logo" alt=""/>
                  <h3 className="nav-jon nav-logotext">Jonathan Montoya</h3>
                  <h3 className="nav-webdev nav-logotext">Web Developer</h3>
               </Link>
               <nav>
                  <ul>
                     <li>
                        <Link to="/about" className="about-link nav-links underline">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="projects-link nav-links">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="contact-link nav-links">Contact</Link>
                    </li>
                </ul>
               </nav>
            </div>
         </header>
      );
}