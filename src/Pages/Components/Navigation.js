import React from 'react';
import jlogo from '../Images/jlogo.jpg';
import '../CSS/Navigation.css';
import { Link } from "react-router-dom";

export default function Nav()
{
    return (
        <header className="bar">
            <div className="box">
               <Link to="/home">
                  <img src={jlogo} className="logo" alt=""/>
                  <h3 className="jon">Jonathan Montoya</h3>
                  <h3 className="webdev">Web Developer</h3>
               </Link>
               <nav>
                  <ul>
                     <li>
                        <Link to="/about" className="about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="contact">Contact</Link>
                    </li>
                </ul>
               </nav>
            </div>
         </header>
      );
}