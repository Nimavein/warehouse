import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/categories">Categories</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/add">Add</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
