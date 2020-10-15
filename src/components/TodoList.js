import React, { Component } from 'react';
import TodoCard from './TodoCard';
import AddButton from './AddButton';

class TodoList extends Component {

    render() { 
        return ( 
            <div style={{width: "30%", backgroundColor: "#ebecf0", padding: "1%", margin: "5px", display: "inline-block"}}>
                <p>{this.props.title}</p>
                {this.props.cards.map(card => <TodoCard key={card.id} card={card}></TodoCard>)}
                <AddButton listID={this.props.listID}></AddButton>
            </div>
         );
    }
}
 
export default TodoList;