import React from 'react';





export default class Home extends React.Component {

    render()
    {

        let dialog = 
        (
        
        <div  className="dialog-box">
            <button className="btn-close" onClick={this.props.onClose}>X</button>
                Thank You! 
        </div>

        )

        if (!this.props.isOpen)
        {
            dialog = null;
        }

        return(
            <div>
                {dialog}
            </div>



        );
    }


}