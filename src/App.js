import React from 'react';
import jlogo from './jlogo.jpg';
import Home from './Pages/Home';
import About from'./Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() 
{
    return (

    <div>


        <Router>
            <div>
                <header className="bar">
                    <div className="box">
                        <Link to="/"  >
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
                

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>

    </div>
    );
}





