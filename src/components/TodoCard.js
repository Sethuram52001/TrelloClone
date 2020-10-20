import React, { Component } from 'react';
import {Draggable} from "react-beautiful-dnd";

class TodoCard extends Component {

    state={
        text: ""
    }

    toEdit = () => {
        console.log("edit option")
        console.log(this.state.text)
    }

    render() { 
        return ( 
            // dnd container 
            <Draggable draggableId={String(this.props.id)} index={this.props.index}>
                {provided => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {/* the card itself */}
                    <div className="card" style={{width: "80%"}}>
                        <p>{this.props.card.text}</p>
                        <div onClick={this.toEdit}>
                            <i className="fa fa-pencil-square-o fa-1x" style={{color:"#66F900"}} aria-hidden="true"></i>
                        </div>
                    </div>
                    </div>
                )}
            </Draggable>
         );
    }
}
 
export default TodoCard;