import React from 'react';
import Navigation from './Navigation';
import photo from '../Images/jonathanmontoya.png'
import '../CSS/About.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default class About extends React.Component {

    render() {
        
        return (
            <div>
                <Navigation />
                <hr></hr>

                <Container>
                    <Row className="justify-content-center">

                        <Col xs={11} lg={8} className="aboutColumn">

                            <Row className="align-items-center photoText text-white px-3 mt-2">

                                <Col xl={4}>
                                    <img src={photo} className="photo" alt=""/>
                                </Col>

                                <Col xl={2} className="photoTitle d-none d-xl-inline">
                                    <h4>Name:</h4>
                                    <h4>Age:</h4>
                                    <h4>Education:</h4>
                                </Col>

                                <Col xl={6}>
                                    <h4>Jonathan Montoya</h4>
                                    <h4>24 Years Old</h4>
                                    <h4>BS in Computer Science</h4>
                                </Col>
                                
                            </Row>

                            <br/>

                            <Row className="text-white description px-3">
                                <Col xs={12} className="">
                                    <p>
                                        I am an aspiring Web Developer and Software Engineer with a great passion for computers, coding and technology in general. 
                                        I have experience in Java, HTML, CSS, JavaScript & React. I'm currently learning advanced Java Programming Language, CSS and 
                                        different libraries within CSS such as Bootstrap 4. I also aspire to learn advanced JavaScript, React and much more. 
                                    </p>
                                    <br />
                                    <p>
                                        I took a while to transition into Computer Science. I transferred from some Engineerings to others and finally decided to study Computer Science. 
                                        After my first coding class I decided to seek more experience in the coding world and found a huge desire to keep learning. That allowed me to finally 
                                        find my passion.
                                    </p>
                                    <br />
                                    <p>
                                        Other than my passion for Computer Science and Software Engineering, I also find passion in Photography and Sports (mainly Soccer). I consider myself a 
                                        great problem-solver, an excellent peer that is able to work in teams, a great individual that is also able to work alone and have the patience and adaptation 
                                        to be able to work in any environment.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="justify-content-center text-white">
                                <Col xs={11}>
                                    <p className="byeP">
                                        Thank you for taking the time to get to know me, hope to hear from you soon!
                                    </p>
                                </Col>
                            </Row>
                            
                        </Col>

                    </Row>
                </Container>
            </div>

        );
    }   

}