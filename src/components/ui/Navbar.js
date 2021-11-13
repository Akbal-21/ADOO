import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { startNewProyect } from "../../actions/proyect";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

export const Navbar1 = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewProyect());
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      //variant="dark"
      <Container>
        <Navbar.Brand>
          <NavLink
            activeclassname="active"
            className="nav-item nav-link"
            exact
            to="/home"
          >
            MASTER MANAGER
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              exact
              to="/home"
            >
              Proyect
            </NavLink>

            <NavDropdown title="Proyectos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink exact to="/my_proyects">
                  My Proyect
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  activeclassname="active"
                  className="nav-item"
                  exact
                  to="/new_proyect"
                  onClick={handleAddNew}
                >
                  New proyect
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  activeclassname="active"
                  className="nav-item"
                  exact
                  to="/new_proyect"
                  onClick={handleAddNew}
                >
                  New proyect
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              exact
              to="/profile"
            >
              Profile
            </NavLink>
          </Nav>
          <Navbar.Text>
            <span className="navbar-tex nav-link text-info">{name}</span>
            <button
              activeclassname="active"
              className="nav-item nav-link btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
