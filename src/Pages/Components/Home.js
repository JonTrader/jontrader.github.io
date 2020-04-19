import React from 'react';
import Navigation from './Navigation';
import logo from '../Images/laptop.jpg';
import '../CSS/Home.css';



export default class Home extends React.Component {


    render() {
        
        return (
        
        <div>
            <Navigation />
            <div>
                <div className="center">
                    <a
                    className="link"
                    href="https://drive.google.com/open?id=1hpb6NHpRxn1A92GHbXtbSLWBLca51ROO"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Download My Resume Here!
                    </a>
                    <img src={logo} className="laptop" alt="logo" />
                </div>
            </div>
        </div>
        );
    }   

}