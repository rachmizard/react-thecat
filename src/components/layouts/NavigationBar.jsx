import logo from "./../../logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand bg="light" href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        The cat react app
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="#features">Cats</Nav.Link>
        </Link>
        <Link to="/favourites">
          <Nav.Link href="#pricing">Favourites</Nav.Link>
        </Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Dev by: <a href="#login">Rachmizard</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
