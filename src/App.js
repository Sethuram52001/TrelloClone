import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {

  onDragEnd = () => {
    // Todo rendering logic
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