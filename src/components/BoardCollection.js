import React, { Component } from 'react';
import AddBoard from "./AddBoard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BoardCollection extends Component {
    state = {}
    
    componentDidUpdate() {
        console.log(this.props.boards);
    }

    renderBoardsTest = () => {
        const { boardOrder, boards } = this.props;
        boardOrder.map(boardID => {
            const board = boards[boardID];
            console.log(board);
        })
    }

    renderBoards = () => {
        const { boardOrder, boards } = this.props;
        return (
            <div>
                {boardOrder.map((boardID) => {
                    const board = boards[boardID];
                    return (
                        <Link to={`${board.id}`} style={{ background: "white", padding: "0% 5%" }}>{board.title}</Link>
                    )
                })}
            </div>
        )
        /*return (
            <div>
                <Link to="/">hi</Link>
            </div>
        )*/
    }

    render() { 

        const { boards } = this.props;

        return (  
            <div>
                board collection
                <AddBoard boards={boards}></AddBoard>
                <button onClick={this.renderBoardsTest}>console the boards</button>
                {this.renderBoards()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards,
    boards: state.boards,
    boardOrder: state.boardOrder
});
 
export default connect(mapStateToProps)(BoardCollection);