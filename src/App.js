
import React from 'react';

import { Container, Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import "./App.css";
import { DropDownMenu } from "./components/Dropdownmenu";
import { DropDownSubMenu } from "./components/dropdownsubmenu";

const App = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">A-Ortega</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <DropDownMenu title="Services" id="collabsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                <DropDownSubMenu href="#action/3.7" title="Text to show">
                  <NavDropdown.Item href="#action/9.1">Development</NavDropdown.Item>
              </DropDownSubMenu>
              </DropDownMenu>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default App;
