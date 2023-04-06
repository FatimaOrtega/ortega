import React from 'react'

import Logo from "../assets/logo.svg"
import { Container, Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import { DropDownMenu } from "./Dropdownmenu";
import { DropDownSubMenu } from "./dropdownsubmenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../App.css";

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
                 
                    
                  <NavDropdown.Item href="installation">Installations</NavDropdown.Item>
                
               
                <NavDropdown.Item href="maintenance">Maintenance</NavDropdown.Item>
                  
              </DropDownMenu>
              <Nav.Link href="aboutUs">About Us</Nav.Link>
              <Nav.Link href="contactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  )
}
