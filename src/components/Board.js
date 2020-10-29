import React, { Component } from 'react';
import TodoList from "./TodoList";
import AddButton from "./AddButton";
import { connect } from "react-redux";
import { sort } from "../redux/actions";
import { DragDropContext,Droppable } from "react-beautiful-dnd";

class Board extends Component {

    onDragEnd = (result) => {
        // come here again
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }

        this.props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type));
    }
    
    render() { 

        const { lists, cards, boards } = this.props;
        const board = boards["board-0"];
        const listOrder = board.lists;

        return ( 
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                {provided => (
                <div  {...provided.droppableProps} ref={provided.innerRef} style={{ display: "flex", flexDirection: "row"}}>    
                {listOrder.map((listID, index) => {
                    const list = lists[listID];
                    if (list) {
                        const listCards = list.cards.map(cardId => cards[cardId]);
                        return (
                            <div style={{ width: "272px", margin: "0 4px"}}> 
                                <TodoList
                                    listID={list.id}
                                    key={list.id}
                                    title={list.title}
                                    cards={listCards}
                                    index={index}
                                ></TodoList>
                            </div>
                        );
                    }
                })}
                {provided.placeholder}
                <AddButton list></AddButton>
                </div>          
                )}
                </Droppable>
            </DragDropContext>
         );
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards,
    boards: state.boards
});

export default connect(mapStateToProps)(Board);