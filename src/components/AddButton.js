// add list or a card
import React, { Component } from 'react';
import Textarea from "react-autosize-textarea"; 
import {connect} from 'react-redux';
import {addList, addCard} from '../actions'

class AddButton extends Component {
    
    state={
        formState: false, // to check whether the form is opened or not
        text: ""
    }

    openForm = () => {
        this.setState({
            formState: true
        })
    }

    closeForm = () => {
        this.setState({
            formState: false
        })
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if(text) {
            dispatch(addList(text)); // handled by redux
        }

        this.setState({
            text: ""
        })
        return;
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            dispatch(addCard(listID, text)); // handled by redux
        }
        
        this.setState({
            text: ""
        })
    }

    ToAddCard = () => {
        const list = this.props.list;
        const buttonType = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;

        return (
            <div style={{opacity: buttonTextOpacity, cursor: "pointer"}} onClick={this.openForm}>
                <p><i className="fa fa-plus" aria-hidden="true"></i>{buttonType}</p>
            </div>
        )
    }

    renderForm = () => {
        const list = this.props.list;
        
        const placeHolder = list ? "Enter list title" : "Enter title for card";

        const buttonTitle = list ? "Add list" : "Add card";
        
        return (
            <div>
            <div className="card" style={{width: "80%"}}>
                <Textarea placeholder={placeHolder} autoFocus onBlur={this.closeForm} onChange={this.handleChange} value={this.state.text}></Textarea>
            </div>
            <div>
                <button onMouseDown={ list ? this.handleAddList : this.handleAddCard} className="btn btn-success">{buttonTitle}</button>
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </div>
        )
    }

    render() { 
        return ( 
        this.state.formState ? this.renderForm() : this.ToAddCard()
         );
    }
}
 
export default connect()(AddButton);