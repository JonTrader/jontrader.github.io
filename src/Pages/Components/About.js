import React from 'react';
import Navigation from './Navigation';
import photo from '../Images/jonathanmontoya.png'
import '../CSS/About.css';



export default class About extends React.Component {

    render() {
        
        return (
            <div>
            <Navigation />
            <hr></hr>
            <div className="about">
                <div className="about-center">
                    <img src={photo} className="photo" alt=""/>
                    <h4 className="photo-titles"><span className="righttext">Name:</span> Jonathan Montoya</h4>
                    <h4 className="photo-titles"><span className="righttext">Age:</span> 24 Years Old</h4>
                    <h4 className="photo-titles"><span className="righttext">Education:</span> BS in Computer Science</h4>
                    <a
                    className="righttext"
                    href="https://drive.google.com/open?id=1hpb6NHpRxn1A92GHbXtbSLWBLca51ROO"
                    >View/Download Resume
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <p className="about-p">
                        I am an aspiring Web Developer and Software Engineer with a great passion for computers, coding and technology in general. 
                        I have experience in Java, HTML, CSS, JavaScript & React. I'm currently learning advanced Java Programming Language, CSS and 
                        different libraries within CSS such as Bootstrap 4. I also aspire to learn advanced JavaScript, React and much more. 
                    </p>
                    <p className="about-p">
                        I took a while to transition into Computer Science. I transfered from some Engineerings to others and finally decided to study Computer Science. 
                        After my first coding class I decided to seek more experience in the coding world and found a huge passion within this world. That allowed me to finally 
                        find my passion.
                   </p>
                    <p className="about-p">
                        Other than my passion for Computer Science and Software Engineering, I also find passion in Photography and Sports (mainly Soccer). I consider myself as a 
                        great problem-solver, an excellent peer that is able to work in teams, a great individual that is also able to work alone and have the patience and adaptation 
                        to be able to work in any environment.
                    </p>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    


                    <p className="bye-p">
                        Thank you for taking the time to get to know me, hope to hear from you soon!
                    </p>

                
                </div>
            </div>
        </div>
        );
    }   

}