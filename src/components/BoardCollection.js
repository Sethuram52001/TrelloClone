import React, { Component } from 'react';
import AddBoard from "./AddBoard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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

    /*
    style={{width: "150px", height: "80px", backgroundColor: "#0079bf", margin: "0 auto", display: "flex", position: "relative", flexDirection: "column"}}
    */

    render() { 

        const { boards } = this.props;

        return (  
            <div style={{padding: "2%"}}>
                <h1>Board Collection</h1>
                <h3>
                    <i className="fa fa-user-o" ></i>
                    Personal Boards
                </h3>
                <div>
                    <div className="renderBoard" className="board-container">
                        {this.renderBoards()}
                    </div>
                    <AddBoard boards={boards}></AddBoard>
                </div>
                <button onClick={this.renderBoardsTest}>console the boards</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    boards: state.boards,
    boardOrder: state.boardOrder
});
 
export default connect(mapStateToProps)(BoardCollection);