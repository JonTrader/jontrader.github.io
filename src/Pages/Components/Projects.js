import React from 'react';
import designpad from '../Images/designpad.gif';
import favoritelinks from '../Images/favoritelinks.gif';
import ms from '../Images/ms.gif';
import stockquotes from '../Images/stockquotes.gif';
import '../CSS/Projects.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Projects extends React.Component {

    render() {
        
        return (
        <div>

            <hr className="navLine"></hr>
            <br/>
            <br/>
            <br/>

            <Container>

                <Row className="justify-content-center">


                    <Col md={6}>
                        <a href="https://github.com/JonTrader/projectdos">
                            <img src={stockquotes} className="projectImgs" alt=""/>
                        </a>
                    </Col>
                    
                    <Col md={6}>
                        <a href="https://github.com/JonTrader/Minesweeper">
                            <img src={ms} className="projectImgs" alt=""/>
                        </a>
                    </Col>

                </Row>

                <br/>
                <br/>

                <Row className="justify-content-around">
                    <Col md={6}>
                        <a href="https://github.com/JonTrader/design-pad">
                            <img src={designpad} className="projectImgs" alt=""/>
                        </a>
                    </Col>

                    <Col md={6}>
                        <a href="https://github.com/JonTrader/favLinks">
                            <img src={favoritelinks} className="projectImgs" alt=""/>
                        </a>
                    </Col>

                </Row>








                

                {/* <Row className="justify-content-center mt-5">
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
                </Row> */}

            </Container>
            
        </div>
        );
    }   

}