import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Board from "./components/Board";

class App extends Component {
  
  render() { 
    return ( 
      <div>
        <Board></Board>
      </div>
     );
  }
}
 
export default App;