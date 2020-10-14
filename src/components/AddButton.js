// add list or a card
import React, { Component } from 'react';
import Textarea from "react-autosize-textarea"; 

class AddButton extends Component {
    
    state={
        formState: false,
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
            <div className="card">
                <Textarea placeholder={placeHolder} autoFocus onBlur={this.closeForm} onChange={this.handleChange} value={this.state.text}></Textarea>
            </div>
            <div>
                <button className="btn btn-success">{buttonTitle}</button>
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
 
export default AddButton;