import React, { Component } from 'react';
import { addBoard } from "../redux/actions";
import { connect } from "react-redux";

class AddBoard extends Component {
    
    state = {
        title: "3"
    }
    
    handleAddBoard = () => {
        const title = this.state.title; 
        this.props.dispatch(addBoard(title));
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    createBoard = () => {
        return (
            <div>
                <input onSubmit={this.handleAddBoard} onChange={this.handleChange} value={this.state.title}></input>
            </div>
        )
    }

    render() { 
        return ( 
            <div>
                <button className="btn btn-success" onClick={this.handleAddBoard}>Create new board</button>
                {this.createBoard()}
            </div>
         );
    }
}
 
export default connect()(AddBoard);