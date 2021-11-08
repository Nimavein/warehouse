import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.55)" }}
              to="/"
            >
              Products
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.55)" }}
              to="/categories"
            >
              Categories
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.55)" }}
              to="/add"
            >
              Add
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
