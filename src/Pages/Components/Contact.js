import React from 'react';
import Navigation from './Navigation';
import Dialog from './Dialog';
import '../CSS/Contact.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



export default class Contact extends React.Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
            fullName: null,
            isOpen: false
        }
    }

    handleSubmit = (e) => 
    {
    
    this.setState({isOpen: true})
    e.preventDefault();
    };

    render() {
        
        return (
            <div>

            
            <Navigation />
            <hr></hr>

            <Container className="mb-5">

                <Row className="justify-content-center">

                    <Col xs={11} lg={8} className="containerSquare">

                        <Row>
                            <Col className="text-center fontSquares">
                                <h3>Contact Me</h3> 
                                <h5>montoya0396@gmail.com</h5>
                                <hr />
                            </Col>
                        </Row>

                        <form>
                        
                            <Row className="justify-content-around fontSquares mb-5">
                                <Col xs={5}>
                                    Your Name
                                    <input 
                                    type="text" 
                                    placeholder="Name" 
                                    onFocus={(e) => e.target.placeholder = ""} 
                                    onBlur={(e) => e.target.placeholder = "Name"}  
                                    required={true} className="" 
                                    name="fullName"
                                    />
                                </Col>

                                <Col xs={5} >
                                    Email Address
                                    <br/>
                                    <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    onFocus={(e) => e.target.placeholder = ""} 
                                    onBlur={(e) => e.target.placeholder = "Email Address"} 
                                    required={true} className="contact-input" />
                                </Col>
                            </Row>

                            <Row className="pt-3 fontSquares justify-content-center">
                                <Col xs={9} md={10}>
                                    Message
                                    <textarea type="text" required={true} className="messageBox"/>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                    <Button type="submit" variant="primary" size="lg" className="mt-5 submitBtn">
                                        Send
                                    </Button>
                            </Row>
                        </form>

                    </Col>
                </Row>

                
            </Container>

            <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false})}/>
            </div>
        );
    }   

}