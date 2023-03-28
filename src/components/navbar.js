import React from 'react'

import Logo from "./assets/logo.svg"
import { Container, Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import { DropDownMenu } from "./Dropdownmenu";
import { DropDownSubMenu } from "./dropdownsubmenu";
import "../App.css";

export const NavigationBar = () => {
    return (
      <>
    <Navbar bg="white" expand="lg" variant="light">
        <Container>
          <img src={Logo} href="/" className='logo'/>
         
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
  )
}
