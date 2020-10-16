import React, { Component } from 'react';
import {Draggable} from "react-beautiful-dnd";

class TodoCard extends Component {

    render() { 
        return ( 
            <Draggable draggableId={String(this.props.id)} index={this.props.index}>
                {provided => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="card" style={{width: "80%"}}>
                        <p>{this.props.card.text}</p>
                    </div>
                    </div>
                )}
            </Draggable>
         );
    }
}
 
export default TodoCard;