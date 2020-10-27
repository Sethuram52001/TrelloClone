import React, { Component } from 'react';
import TodoCard from "./TodoCard";
import AddButton from "./AddButton";
import { connect } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";

class TodoList extends Component {

    render() {

        const { cards, listID, index } = this.props;

        return ( 
                <Draggable draggableId={String(listID)} index={index}>
                    {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Droppable droppableId={String(listID)} type="card">
                        {(provided) => (
                        <div className="card" style={{backgroundColor: "#ebecf0", width: "90%", margin: "10px", marginTop: "10", padding: "2px"}}>{/*  style={{width: "30%", background: "#ebecf0", margin: "10px", marginTop: "10", padding: "2px"}}*/}
                        <p>{this.props.title}</p>
                        <div {...provided.droppableProps} ref={provided.innerRef}>   
                        {cards.map((card, index) => (
                            <div style={{width: "90%", margin: "0 auto 10px"}}>
                                <TodoCard
                                    key={card.id}
                                    text={card.text}
                                    id={card.id}
                                    listID={listID}
                                    index={index}
                                ></TodoCard>
                            </div>
                        ))}
                        {provided.placeholder}
                        <AddButton listID={listID} cards></AddButton>
                        </div> 
                        </div>
                        )}                
                        </Droppable>
                    </div>
                    )}
                </Draggable>
         );
    }
}
 
export default connect()(TodoList);