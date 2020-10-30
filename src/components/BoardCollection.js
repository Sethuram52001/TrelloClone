import React, { Component } from 'react';
import AddBoard from "./AddBoard";
import { connect } from "react-redux";

class BoardCollection extends Component {
    state = {}
    
    componentDidUpdate() {
        console.log(this.props.boards);
    }

    render() { 

        const { boards } = this.props;

        return (  
            <div>
                board collection
                <AddBoard title="new board-52001" boards={boards}></AddBoard>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards,
    boards: state.boards
});
 
export default connect(mapStateToProps)(BoardCollection);