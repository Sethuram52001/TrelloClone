import React, { Component } from 'react';

class TodoCard extends Component {

    render() { 
        return ( 
            <div className="card" style={{width: "80%"}}>
                <p>{this.props.card.text}</p>
            </div>
         );
    }
}
 
export default TodoCard;