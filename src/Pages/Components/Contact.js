import React from 'react';
import Navigation from './Navigation';
import '../CSS/Contact.css';



export default class Contact extends React.Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
            fullName: null
        }
    }

    handleSubmit = (event) =>
    {

    }

    render() {
        
        return (
            <div>

            
            <Navigation />
            <hr></hr>
            <div className="about">
    
            <form className="contact-center" onSubmit={this.handleSubmit}>
                <header>
                <h3 className="contact-title">Contact Me</h3>
                <p>montoya0396@gmail.com</p>
                </header>
                



                <div className="input-divs">
                    Your Name 
                    <br/>
                    <input 
                    type="text" 
                    placeholder="Jonathan Montoya" 
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={(e) => e.target.placeholder = "Name"}  
                    required={true} className="contact-input" 
                    name="fullName"
                />
                </div>


                <div className="input-divs">
                    Email Address
                    <br/>
                    <input 
                    type="text" 
                    placeholder="montoya0396@gmail.com" 
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={(e) => e.target.placeholder = "Email Address"} 
                    required={true} className="contact-input" />
                </div>

                <div className="contact-message">
                    Message
                    <br />
                    <textarea type="text" required={true} className="message-input" />
                </div>

                <input type="submit" className="submit-btn" value="Send"  />

            </form>

            </div>
            </div>
        );
    }   

}