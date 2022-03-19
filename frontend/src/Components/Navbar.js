import React from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = ({ theme, setTheme }) => {
  return (
    <Navbar
      style={{
        width: "100%",
        background: `${theme === "dark" ? "#243447" : "white"}`,
      }}
      expand={false}
      variant={theme}
      collapseOnSelect={true}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Wave</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="">
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link style={{ textDecoration: "none" }} to="/feedback">
                  Feedback
                </Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link style={{ textDecoration: "none" }} to="/about">
                  About
                </Link>
              </Nav.Link>
              <NavDropdown title="Theme" id="basic-nav-dropdown">
                <NavDropdown.Item
                  style={{ color: `${theme === "dark"} ? "white" : "black"` }}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ color: `${theme === "dark"} ? "white" : "black"` }}
                  onClick={() => setTheme("light")}
                >
                  Light
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item
                  style={{ color: `${theme === "dark"} ? "white" : "black"` }}
                >
                  English
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ color: `${theme === "dark"} ? "white" : "black"` }}
                >
                  Spanish
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
