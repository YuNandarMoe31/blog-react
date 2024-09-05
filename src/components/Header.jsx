import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-primary' : 'mx-2 text-decoration-none text-light'}>Home</NavLink>
            <NavLink to="add-blogs" className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-primary' : 'mx-2 text-decoration-none text-light'}>Add Blogs</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
