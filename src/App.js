import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Board from "./components/Board";
import BoardCollection from "./components/BoardCollection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  
  render() { 
    return ( 
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={BoardCollection} />
            <Route path="/board" exact component={Board} />
          </Switch>
        </Router>
      </div>
     );
  }
}
 
export default App;

/*
        <div style={{ backgroundColor: "#026aa7", color: "#bcd9ea", fontFamily: "cursive", textAlign: "center"}}> {/*#055a8c 	#026aa7 -apple-system cursive -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif*/
 /*         <h2><em>Trello Clone</em></h2>
        </div>
        <Board></Board>
        <BoardCollection></BoardCollection>
*/