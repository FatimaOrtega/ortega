
import React from 'react';
import Logo from "./components/assets/logo.svg"

import { Container, Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import "./App.css";
import { DropDownMenu } from "./components/Dropdownmenu";
import { DropDownSubMenu } from "./components/dropdownsubmenu";

const App = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
      
          <Navbar.Brand href="/">
           A-Ortega
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <DropDownMenu title="Services" id="collabsible-nav-dropdown">
              <DropDownSubMenu href="#action/3.7" title="Installation">
                  <NavDropdown.Item href="#action/3.1">A/C</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">Furnace</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">Water Heating</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">Ducts</NavDropdown.Item>
                  </DropDownSubMenu>
                <DropDownSubMenu href="#action/3.7" title="Maintenance">
                <NavDropdown.Item href="#action/3.1">A/C</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">Furnace</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">Water Heating</NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.1">Ducts</NavDropdown.Item>
                </DropDownSubMenu>
              </DropDownMenu>
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default App;
