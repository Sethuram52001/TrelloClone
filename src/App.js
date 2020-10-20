import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {sort} from "./actions";

class App extends Component {

  // to persist the drag and drop of dnd action
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))

  }

  render() {
    
    const lists = this.props.lists;

    return (
      // the dnd container
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h1>Hello World</h1>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
          <div style={{display: "flex"}} {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map((list, index) => <TodoList listID={list.id} index={index} key={list.id} title={list.title} cards={list.cards}></TodoList>)}
            <AddButton list></AddButton>
          </div>
          )}
        </Droppable>
      </div>
      </DragDropContext> 
     );
  }
}

// global state of the lists, using redux
const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);