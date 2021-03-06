import React, { Component } from 'react';
import { removeCard, editCard } from "../redux/actions";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import TextArea from "react-autosize-textarea";

class TodoCard extends Component {

    state = {
        editing: false,
        text: ""
    }

    componentDidMount() {
        const { text } = this.props;
        console.log(text);
        this.setState({text})
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

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSave = (e) => {
        this.setState({ editing: false })
        const { id, listID } = this.props;
        const newText = this.state.text;
        this.props.dispatch(editCard(id, listID, newText));
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({editing: true})
        console.log("edit option is open now");
        console.log(this.props.text);
    }

    renderEditForm = () => {
        return (
            <div>
                <div className="card" style={{width: "100%"}}>
                    <TextArea placeholder={this.state.text} value={this.state.text} onChange={this.handleChange} autoFocus onBlur={this.closeForm}></TextArea>
                </div>   
                {/*<button onMouseDown={this.closeForm}>close</button>*/}
                <button onMouseDown={this.handleSave} className="btn btn-success">save</button>
            </div>
        )
    }

    renderCard = () => {
        const { id, index, text, listID } = this.props;

        return (
        
            <Draggable draggableId={String(id)} index={index}>
                {(provided) => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className="card" >
                    <p className="editButton">
                        {text}
                        <div className="hide">
                            {/*<i className="fa fa-pencil-square-o" onMouseDown={this.handleEdit}></i>*/}
                            <i onMouseDown={this.handleDelete} className="fa fa-trash" aria-hidden="true" style={{paddingRight: "2px"}}></i>
                        </div>
                        <div className="hide">
                            <i className="fa fa-pencil-square-o" onMouseDown={this.handleEdit}></i>
                            {/*<i onMouseDown={this.handleDelete} className="fa fa-trash" aria-hidden="true" style={{paddingRight: "2px"}}></i>*/}
                        </div>        
                    </p>
                    </div>
                </div>
                )}
            </Draggable>
        )
    }

    render() {
        const { id, index, text,listID } = this.props;
        return this.state.editing ? this.renderEditForm() : this.renderCard();
    }
}
                 
export default connect()(TodoCard);

/*
            <div>
                {this.state.editing ?  this.renderCard() : this.renderEditForm() }
            </div>
*/