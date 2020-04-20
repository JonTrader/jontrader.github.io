import React from 'react';
import Navigation from './Navigation';
import '../CSS/Contact.css';



export default class Contact extends React.Component {

    render() {
        
        return (
            <div>

            
            <Navigation />
            <hr></hr>
            <div className="about">
    
            <div className="center-square">
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>

            </div>
            </div>
        );
    }   

}