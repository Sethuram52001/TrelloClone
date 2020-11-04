import React, { Component } from 'react';
import { Dropdown, DropdownButton, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {    
    const { boards, boardOrder } = this.props;

    return ( 
      <div>
        <Link to="/" style={{color: "white", marginLeft: "0"}}><i className="fa fa-home"></i></Link>
        <DropdownButton id="dropdown-basic-button" title="Boards" style={{display: "inline-block", float: "center"}}>
          {boardOrder.map((boardID) => {
            const board = boards[boardID];
            return(
              <Dropdown.Item key={boardID}>
                  <Link to={`/${board.id}`} style={{ textDecoration: "none" }}>{board.title}</Link>
              </Dropdown.Item>
            )
          })}
        </DropdownButton>
      </div>
    );
  }
}
 
export default Navbar;