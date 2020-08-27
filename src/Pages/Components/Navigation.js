import React from 'react';
import jlogo from '../Images/j.png';
import '../CSS/NavBar.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

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
                                
                                <Link className="mr-4 nav-link" to="/about">About</Link>
                                
                                <Link className="mr-4 nav-link" to="/projects">Projects</Link>
                                
                                <Link className="nav-link" to="/contact">Contact</Link>

                            </Nav>

                        </Navbar.Collapse>

                    </Container>

                </Navbar>
            
        );
    }

}