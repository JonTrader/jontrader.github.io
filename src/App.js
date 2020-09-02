import React from 'react';
import Home from './Pages/Components/Home';
import About from'./Pages/Components/About';
import Projects from './Pages/Components/Projects';
import Contact from './Pages/Components/Contact';
import './Pages/CSS/NavBar.css';
import jlogo from './Pages/Images/j.png';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Navbar expand="lg" variant="dark" className="navBarAnimation">

          <Container>
              
              <Navbar.Brand>
                  <Link to="/">
                      <img src={jlogo} className="navLogo" alt=""/>
                  </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" className="lines" />

              <Navbar.Collapse id="basic-navbar-nav">

                  <Nav className="ml-auto">
                      
                      <Link className="mr-4 nav-link" to="/about">About</Link>
                      
                      <Link className="mr-4 nav-link" to="/projects">Projects</Link>
                      
                      <Link className="nav-link" to="/contact">Contact</Link>

                  </Nav>

              </Navbar.Collapse>

          </Container>

        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/projects" exact>
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

        </Switch>
    </Router>
  );
}





