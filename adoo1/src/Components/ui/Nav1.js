import React, { useContext } from "react";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { types } from "../../types/types";
import 'boxicons';
import { AuthContext } from "../Auth/AuthContext";

export const Nav1 = () => {
  const {
    user: { name },
    dispatch
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate('/auth/welcom');

    dispatch({
      type: types.logout
    });
  }


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
                  to="/welcom"
                >
                  Bienvenido
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}
                  to="/newequip"
                >
                  Nuevo equipo
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Proyectos" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    className={({ isActive }) => "nav-item" + (isActive ? " activated" : "")}
                    to="/myproyects"
                  >
                    Mis proyectos
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className={({ isActive }) => "nav-item" + (isActive ? " activated" : "")}
                    to="/newproyect"
                  >
                    Nuevo proyecto
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <NavLink
                  className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}
                  to="/contact"
                >
                  Contacto
                </NavLink>
              </Nav.Link>
            </Nav>

            <Navbar.Text>
              <NavLink
                className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}
                to="/profile"
              >
                <span className="nav-item nav-link text-info">{name}</span>
              </NavLink>
            </Navbar.Text>
            <Navbar.Text>
              <Button className="nav-item nav-link btn" onClick={handleLogout}>
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


//myproyects