import React from 'react';
import jlogo from '../Images/j.png';
import '../CSS/NavBar.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navigation extends React.Component
{
    render()
    {
        return (

                <Navbar expand="lg" variant="dark" className="navBarAnimation">

                    <Container>
                        
                        <Navbar.Brand>
                            <Link to="/home">
                                <img src={jlogo} className="navLogo" alt=""/>
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="lines" />

                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="ml-auto">

                                <Nav.Link className="mr-4">
                                    <Link to="/about">About</Link>
                                </Nav.Link>

                                <Nav.Link className="mr-4">
                                    <Link to="/projects">Projects</Link>
                                </Nav.Link>

                                <Nav.Link>
                                    <Link to="/contact">Contact</Link>
                                </Nav.Link>

                            </Nav>

                        </Navbar.Collapse>

                    </Container>

                </Navbar>
            
        );
    }

}