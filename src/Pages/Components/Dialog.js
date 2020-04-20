import React, {Component} from 'react';





export default class Home extends React.Component {

    render()
    {

        let dialog = 
        (

        <div>
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