import React, { Component } from 'react';
import AddBoard from "./AddBoard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class BoardCollection extends Component {
    state = {}
    
    componentDidMount() {
        document.body.style.backgroundColor = "white"
    }

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
                        <Link key={boardID} to={`/${board.id}`} style={{textDecoration: "none", color: "white"}}>
                            <div className="board-display">{board.title}</div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    render() { 

        const { boards, boardOrder } = this.props;

        return (  
            <div>
                <h1>Board Collection</h1>
                <h3>
                    <i className="fa fa-user-o" ></i>
                    Personal Boards
                </h3>
                <div className="renderBoard" className="board-container">
                    {this.renderBoards()}
                    <AddBoard boards={boards}></AddBoard>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    boards: state.boards,
    boardOrder: state.boardOrder
});
 
export default connect(mapStateToProps)(BoardCollection);