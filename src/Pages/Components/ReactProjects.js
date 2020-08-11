import React from 'react';
import Navigation from './Navigation';
import project1 from '../Images/project1.gif';
import project2 from '../Images/project2.gif';
import arrow from '../Images/arrow.png';
import '../CSS/Projects.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class reactProjects extends React.Component {

    render()
    {
        return (
            <div>
                <Navigation />
                <hr></hr>

                <Container fluid className="reactContainer">
                    <Row>
                        <Col xs={1} sm={2} md={3} xl={2}>
                    
                        </Col>
                        <Link to="/projects">
                            <img src={arrow} alt="" className="arrowBack"/>
                        </Link>
                    </Row>

                    <Row className="text-center my-5">
                        <Col xl={2}>
                        
                        </Col>
                        
                        <Col xl={4} className="my-5">
                            <a href="https://github.com/JonTrader/favlinks">
                                <img className="reactProjects" src={project1} alt=""/>
                            </a>
                        </Col>

                        <Col xl={4} className="my-5">
                            <a href="https://github.com/JonTrader/favlinks">
                                <img className="reactProjects" src={project2} alt=""/>
                            </a> 
                        </Col>

                        <Col xl={2}>
                        
                        </Col>
                    </Row>

                </Container>

            </div>

        );
    }




}