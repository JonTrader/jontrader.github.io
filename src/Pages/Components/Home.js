import React from 'react';
import '../CSS/Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class Home extends React.Component {


    render() {
        
        return (
        
        <div>
            
            <br />
            <br />
            <br />
            <br />
            <Container className="text-center">

                <Row>
                    <Col className="text-white welcomeText">
                        <h1>
                            Hello, I'm <span>Jonathan Montoya</span>
                        </h1>
                        <h4>I'm happy you're here!</h4>
                    </Col>
                </Row>

                <Row >
                    <div className="homeCenter">
                            <h2>Welcome!</h2>
                    </div>
                </Row>



            </Container>
        </div>
        );
    }   

}