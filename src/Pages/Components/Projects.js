import React from 'react';
import Navigation from './Navigation';
import react from '../Images/react.png';
import htmlcss from '../Images/htmlcss.png';
import '../CSS/Projects.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Projects extends React.Component {

    render() {
        
        return (
        <div>

            <Navigation />
            <hr className="navLine"></hr>

            <Container className="projectsContainer">

                <Row>
                    <Col>

                    </Col>
                    
                    <Col>
                    </Col>

                    <Col>
                    </Col>
                </Row>








                

                <Row className="justify-content-center mt-5">
                    <Link to="/projects/reactprojects">
                        <img className="projectImgs" src={react} alt=""/>
                    </Link>
                </Row>

                <br/>
                <br/>
                
                <Row className="justify-content-center" >
                    <Link to="/projects/htmlcssproject">
                        <img className="projectImgs" src={htmlcss} alt=""/>
                    </Link>
                </Row>

            </Container>
            
        </div>
        );
    }   

}