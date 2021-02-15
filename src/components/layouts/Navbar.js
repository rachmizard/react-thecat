import logo from "./../../logo.svg";
import { Navbar as Nav } from "react-bootstrap";
import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <Nav bg="dark" variant="dark">
          <Nav.Brand bg="light" href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> The cat react app
          </Nav.Brand>
          <Nav.Toggle />
          <Nav.Collapse className="justify-content-end">
            <Nav.Text>
              Dev by: <a href="#login">Rachmizard</a>
            </Nav.Text>
          </Nav.Collapse>
        </Nav>
      </nav>
    );
  }
}

export default Navbar;
