import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import {sort} from "./actions";

class App extends Component {

  onDragEnd = (result) => {
    // Todo rendering logic
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))

  }

  render() {
    
    const lists = this.props.lists;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h1>Hello World</h1>
        <div style={{display: "flex"}}>
        {lists.map(list => <TodoList listID={list.id} key={list.id} title={list.title} cards={list.cards}></TodoList>)}
        <AddButton list></AddButton>
        </div>
      </div>
      </DragDropContext> 
     );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);