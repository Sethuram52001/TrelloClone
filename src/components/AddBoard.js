import React, { Component } from 'react';
import { addBoard } from "../redux/actions";
import { connect } from "react-redux";

class AddBoard extends Component {
    
    state = {
        title: "Create new board"
    }
    
    handleAddBoard = (e) => {
        e.preventDefault();
        const title = this.state.title; 
        this.props.dispatch(addBoard(title));
        this.setState({title: "Create new board"})
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    createBoard = (e) => {
       // e.preventDefault();
        return (
            <form onSubmit={this.handleAddBoard}>
                <input onChange={this.handleChange} value={this.state.title} type="text" style={{height: "100px", width: "200px", textAlign: "center"}}></input>
            </form>
        )
    }

    render() { 
        return ( 
            <div>
                {this.createBoard()}
            </div>
         );
    }
}
 
export default connect()(AddBoard);

/*
<div onClick={this.handleAddBoard} style={{ divackgroundColor: "#97a0af" }} >Create new board</div>
*/



    /*createBoard = () => {
        return (
            <div>
                <input onSubmit={this.handleAddBoard} onChange={this.handleChange} value={this.state.title}></input>
            </div>
        )
    }

    helper = () => {
        return (
            <form onSubmit={this.handleAddBoard}>
                <input onChange={this.handleChange} value={this.state.title} type="text"></input>
            </form>
        )
    }*/