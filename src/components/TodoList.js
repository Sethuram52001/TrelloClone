import React, { Component } from 'react';
import TodoCard from './TodoCard';
import AddButton from './AddButton';
import { Draggable, Droppable } from 'react-beautiful-dnd';

class TodoList extends Component {

    render() { 
        return ( 
            // dnd container
            <Draggable draggableId={String(this.props.listID)} index={this.props.index}> 
                {provided => (
                    <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} style={{width: "30%", backgroundColor: "#ebecf0", padding: "1%", margin: "5px", display: "inline-block"}}>
                    <Droppable droppableId={String(this.props.listID)}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}> {/* style={{width: "30%", backgroundColor: "#ebecf0", padding: "1%", margin: "5px", display: "inline-block"}}*/}
                            <p>{this.props.title}</p>
                            {/* cards are mapped through */}
                            {this.props.cards.map((card, index) => <TodoCard index={index} key={card.id} card={card} id={card.id}></TodoCard>)}
                            {/* Add button is determined based on the prop  */}
                            <AddButton listID={this.props.listID}></AddButton>
                            {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    </div>
                )}
            </Draggable>
         );
    }
}
 
export default TodoList;