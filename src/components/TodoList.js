import React, { Component } from 'react';
import TodoCard from './TodoCard';
import AddButton from './AddButton';
import { Droppable } from 'react-beautiful-dnd';

class TodoList extends Component {

    render() { 
        return ( 
            <Droppable droppableId={String(this.props.listID)}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} style={{width: "30%", backgroundColor: "#ebecf0", padding: "1%", margin: "5px", display: "inline-block"}}>
                        <p>{this.props.title}</p>
                        {this.props.cards.map((card, index) => <TodoCard index={index} key={card.id} card={card} id={card.id}></TodoCard>)}
                        <AddButton listID={this.props.listID}></AddButton>
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
         );
    }
}
 
export default TodoList;