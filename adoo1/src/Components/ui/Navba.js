import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navba = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src="https://i.ibb.co/jDxnLc7/Master-Manager.png" alt="escom" border="0" sizes={{ width: 14 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}
                  to="/auth/welcom"
                >
                  Bienvenido
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}
                  to="/auth/about"
                >
                  Sobre nosotros
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}
                  to="/auth/contact"
                >
                  Contacto
                </NavLink>
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              <NavLink
                className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}
                to="/auth/login"
              >
                Login
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
