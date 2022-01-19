import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Login from "./Login";
import Logout from "./Logout";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="#home" className="navbar-brand">
                Book Store
              </a>
            </div>

            <Nav className="navbar-right">
             
              <Logout />
              <Login/>
            </Nav>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
