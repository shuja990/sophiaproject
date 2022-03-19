import React, { useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = ({ theme, setTheme }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Navbar
      style={{
        width: "100%",
        background: `${theme === "dark" ? "#243447" : "white"}`,
      }}
      expand={expand}
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
              <Nav.Link href="#action2">
                <Link style={{ textDecoration: "none" }} to="/home">
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
                  href="#action2"
                >
                  Dark
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ color: `${theme === "dark"} ? "white" : "black"` }}
                  onClick={() => setTheme("light")}
                  href="#action2"
                >
                  Light
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item
                  style={{ color: `${theme === "dark"} ? "white" : "black"` }}
                  href="#action2"
                >
                  English
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ color: `${theme === "dark"} ? "white" : "black"` }}
                  href="#action2"
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
