import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/websitelogo.png";
import {
 NavLink
} from "react-router-dom";
import Contact from "./Contact";
import { FaRegUser } from "react-icons/fa";



const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container style={{paddingBottom: 50}}>
          <Navbar.Brand href="#home">
            <img src={logo} height={50} width={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="">
              <NavLink className="nav-link" to="/Store1">HOME</NavLink>
              <NavLink className="nav-link" to="/Journey">THE JOURNEY</NavLink>
              <NavLink className="nav-link" to="/Team">TEAM</NavLink>
              <NavLink className="nav-link" to="/Store">STORE</NavLink>
              <NavLink className="nav-link" to="/Contact">CONTACT</NavLink>
            
              
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <FaRegUser style={{ fontSize: '18px', marginRight: '10px'}}/>
            <Navbar.Text>
              GAGAN
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
