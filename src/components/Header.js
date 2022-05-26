// import { Dropdown } from 'bootstrap';
import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";

const navbar = {backgroundColor: '#1B1A17',color:'#fff'};

function Header() {
  return (
    <>
      <Navbar style={navbar} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Books4U</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Profile
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Save for Later</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
