import React from 'react';
import Navigation from './Navigation';
import '../CSS/Home.css';



export default class Home extends React.Component {


    render() {
        
        return (
        
        <div>
            <Navigation />
            <div>
                <div className="home-center">
                    <p className="home-text">Welcome!</p>
                </div>
            </div>
        </div>
        );
    }   

}