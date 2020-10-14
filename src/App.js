import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    
    const lists = this.props.lists;

    return ( 
      <div>
        <h1>Hello World</h1>
        <div style={{display: "flex"}}>
        {lists.map(list => <TodoList key={list.id} title={list.title} cards={list.cards}></TodoList>)}
        <AddButton list></AddButton>
        </div>
      </div>
     );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);