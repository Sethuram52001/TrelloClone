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
                <div className="card" style={{ width: "100%" }}>
                    <TextArea placeholder={this.state.title} autoFocus onBlur={this.closeForm} onChange={this.handleChange} value={this.state.title}></TextArea>
                </div>
                <div>
                    {/*<button onClick={this.closeForm}>close</button>*/}
                    <button onMouseDown={this.handleSave} className="btn btn-success">save</button>
                </div>
            </div>
        )
    }

    handleDelete = (e) => {
        e.preventDefault();
        const { listID, boardID } = this.props;
        console.log("delete list is called" + listID);
        this.props.dispatch(removeList(listID,boardID));
    }

    render() {

        const { cards, listID, index } = this.props;

        return ( 
                <Draggable draggableId={String(listID)} index={index}>
                    {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Droppable droppableId={String(listID)} type="card">
                        {(provided) => (
                        <div className="card" style={{ backgroundColor: "#ebecf0", width: "272px", margin: "4px", marginTop: "10", padding: "2px", borderRadius: "3px", boxSizing: "border-box"}}>{/* style={{ backgroundColor: "#ebecf0", width: "100%", margin: "10px", marginTop: "10", padding: "2px", borderRadius: "3px", maxHeight: "100%" }} boxSizing: "border-box"*/}
                        {this.state.editing ? (this.renderEditForm()) : (
                        <p className="editButton">{/*onMouseDown={this.handleEdit}*/}
                            {this.props.title}
                            <div className="hide">
                                {/*<i className="fa fa-pencil-square-o" onClick={this.handleEdit}></i>*/}
                                <i className="fa fa-trash" onClick={this.handleDelete}></i>                
                            </div>                  
                            <div className="hide">
                                <i className="fa fa-pencil-square-o" onClick={this.handleEdit}></i>
                                {/*<i className="fa fa-trash" onClick={this.handleDelete}></i>*/}                
                            </div>                             
                        </p>            
                        )}
                        <div {...provided.droppableProps} ref={provided.innerRef}>   
                        {cards.map((card, index) => (
                            <div style={{width: "95%", margin: "0 auto 10px"}}>
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