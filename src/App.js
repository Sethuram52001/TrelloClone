import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Board from "./components/Board";

class App extends Component {
  
  render() { 
    return ( 
      <div>
        <div style={{ backgroundColor: "#026aa7", color: "#bcd9ea", fontFamily: "cursive", textAlign: "center"}}> {/*#055a8c 	#026aa7 -apple-system cursive -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif*/}
          <h2><em>Trello Clone</em></h2>
        </div>
        <Board></Board>
      </div>
     );
  }
}
 
export default App;