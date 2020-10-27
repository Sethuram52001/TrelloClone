import React, { Component } from 'react';
import { removeCard } from "../redux/actions";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import TextArea from "react-autosize-textarea";

class TodoCard extends Component {

    state = {
        editing: false
    }

    closeForm = (e) => {
        e.preventDefault();
        this.setState({ editing: false });
    }

    handleDelete = (e) => {
        e.preventDefault();
        const { id, listID } = this.props;
        console.log(listID);
        this.props.dispatch(removeCard(id, listID));
    }

    handleEdit = (e) => {
        e.preventDefault();
        console.log("edit option is open now");
    }

    renderEditForm = () => {
        return(
            <div className="card" style={{ width: "100%"}}>
                <TextArea placeholder={"hi edit is opened"} autoFocus onBlur={this.closeForm} onChange={this.handleChange} value={this.state.text}></TextArea>
                <button className="btn btn-success" onClick={() => this.setState({editing:false})} closeForm={this.closeForm}>save</button>
            </div>
        )
    }

    renderCard = () => {

        const { id, index, text,listID } = this.props;

        return (
            <div>
            <Draggable draggableId={String(id)} index={index}>
                {(provided) => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className="card">
                    <p>
                        {text}
                        <i className="fa fa-pencil-square-o" onMouseDown={this.handleEdit}></i>
                        <i onMouseDown={this.handleDelete} className="fa fa-trash" aria-hidden="true"></i>
                    </p>
                    </div>
                </div>
                )}
            </Draggable>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.editing ?  this.renderCard() : this.renderEditForm() }
            </div>
        );
    }
}
                 
export default connect()(TodoCard);