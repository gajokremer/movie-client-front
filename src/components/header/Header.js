import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Nav, Navbar, NavbarToggle } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "gold" }}>
            <FontAwesomeIcon icon={faVideoSlash}>Gold</FontAwesomeIcon>
          </Navbar.Brand>
          <NavbarToggle aria-controls="navbarScrikk"></NavbarToggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="nav-link" to="watchList">
                Watch List
              </NavLink>
            </Nav>
            <Button variant="outline-info" className="me-2">
              Login
            </Button>
            <Button variant="outline-info">Register</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
