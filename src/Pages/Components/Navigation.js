import React from 'react';
import jlogo from '../Images/j.png';
import '../CSS/NavBar.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default class Navigation extends React.Component
{
    render()
    {
        return (

                <Navbar expand="lg" variant="dark" className="navBarAnimation">

                    <Container>
                        <Navbar.Brand href="/home">
                            <img src={jlogo} className="navLogo" alt=""/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="lines" />

                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="ml-auto">
                                <Nav.Link href="/about" className="mr-4">About</Nav.Link>
                                <Nav.Link href="/projects" className="mr-4">Projects</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            
        );
    }

}