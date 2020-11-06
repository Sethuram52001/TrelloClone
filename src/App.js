import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Board from "./components/Board";
import BoardCollection from "./components/BoardCollection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";

class App extends Component {
  
  render() { 

    const { boards, boardOrder } = this.props;

    return ( 
      <div>
        <Router>
          <h3 style={{backgroundColor: "#026aa7", color: "white"}} class="panel-footer">
            <Navbar boards={boards} boardOrder={boardOrder}></Navbar>
            <em style={{color: "#8bbdd9"}}>Trello</em>
          </h3>
          <Switch>
            <Route path="/" exact component={BoardCollection} />
            <Route path="/:boardID" component={Board} />
          </Switch>
        </Router>
      </div>
     );
  }
}

const mapStateToProps = state => ({
    boards: state.boards,
    boardOrder: state.boardOrder
});
 
export default connect(mapStateToProps)(App);

