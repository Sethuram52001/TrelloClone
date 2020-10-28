import React, { Component } from 'react';
import TodoCard from "./TodoCard";
import AddButton from "./AddButton";
import { connect } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { editList, removeList } from "../redux/actions";
import TextArea from "react-autosize-textarea";

class TodoList extends Component {

    state = {
        editing: false,
        title: ""
    }

    componentDidMount() {
        const { title } = this.props;
        this.setState({ title });
    }

    closeForm = (e) => {
        e.preventDefault();
        this.setState({
            editing: false
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }

    handleSave = (e) => {
        this.setState({ editing: false });
        const { listID } = this.props;
        const newTitle = this.state.title;
        this.props.dispatch(editList(listID, newTitle));
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({ editing: true });
    }

    renderEditForm = () => {
        return (
            <div>
                <TextArea placeholder={this.state.title} value={this.state.title} onChange={this.handleChange}></TextArea>
                <button onClick={this.closeForm}>close</button>
                <button onClick={this.handleSave}>save</button>
            </div>
        )
    }

    handleDelete = (e) => {
        e.preventDefault();
        const { listID } = this.props;
        console.log("delete list is called" + listID);
        this.props.dispatch(removeList(listID));
    }

    render() {

        const { cards, listID, index } = this.props;

        return ( 
                <Draggable draggableId={String(listID)} index={index}>
                    {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Droppable droppableId={String(listID)} type="card">
                        {(provided) => (
                        <div className="card" style={{backgroundColor: "#ebecf0", width: "90%", margin: "10px", marginTop: "10", padding: "2px"}}>{/*  style={{width: "30%", background: "#ebecf0", margin: "10px", marginTop: "10", padding: "2px"}}*/}
                        {this.state.editing ? (this.renderEditForm()) : (
                        <p>
                            {this.props.title}
                            <i className="fa fa-pencil-square-o" onMouseDown={this.handleEdit}></i>
                            <i className="fa fa-trash" onClick={this.handleDelete}></i>                
                        </p>            
                        )}
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