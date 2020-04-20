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
                    Meatloaf frankfurter short loin hamburger pork chislic, landjaeger swine boudin sausage chuck shoulder flank ham tenderloin. Turducken alcatra t-bone drumstick chicken. Capicola tongue prosciutto, cow beef flank turkey picanha pork ribeye beef ribs chicken spare ribs. Pork biltong bacon ball tip porchetta cupim, bresaola drumstick.
                    </p>
                    <p className="about-p">
                    Strip steak pig leberkas kevin tongue. Kielbasa drumstick fatback pig, jowl pork chop bacon buffalo rump strip steak cow beef capicola turducken alcatra. Shankle brisket burgdoggen pastrami andouille bresaola picanha sirloin tail pork loin rump shank. Shankle doner shank, ham bacon tri-tip ground round drumstick salami meatball pancetta tenderloin burgdoggen pork loin beef ribs. Ribeye pork chop frankfurter landjaeger, burgdoggen pork belly turkey venison shankle meatloaf alcatra.
                    </p>
                    <p className="about-p">
                    Meatball strip steak leberkas t-bone meatloaf frankfurter, shankle pork chop sausage ham hock pork burgdoggen corned beef bacon. Boudin pig shoulder beef short loin meatball jowl. Frankfurter jerky kielbasa pork belly meatloaf, pork chop t-bone beef. Meatloaf tail strip steak short loin pork, bacon picanha ham. Jowl porchetta chuck, pastrami alcatra pork loin filet mignon rump corned beef capicola spare ribs. Pork chop flank swine andouille.
                    </p>
                    <p className="about-p">
                    Meatball strip steak leberkas t-bone meatloaf frankfurter, shankle pork chop sausage ham hock pork burgdoggen corned beef bacon. Boudin pig shoulder beef short loin meatball jowl. Frankfurter jerky kielbasa pork belly meatloaf, pork chop t-bone beef. Meatloaf tail strip steak short loin pork, bacon picanha ham. Jowl porchetta chuck, pastrami alcatra pork loin filet mignon rump corned beef capicola spare ribs. Pork chop flank swine andouille.
                    </p>
                
                </div>
            </div>
        </div>
        );
    }   

}