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
                <div className="home-center">
                </div>
            </div>
        </div>
        );
    }   

}