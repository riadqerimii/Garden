import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Change import here

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FaPhone } from "react-icons/fa";

function AppNavbar() {
  return (
    <>
      <Container>
        <Row className="p-2">
          <Col md={6} sm={12}>
            <a className="number" href="+41 123 45 67">
              <FaPhone /> + 041-123-45-67
            </a>
          </Col>
          <Col
            md={6}
            sm={12}
            className="icons-content  text-end justify-content-center pt-2"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="mx-3 icons"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="mx-3 icons"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="mx-2 icons "
            />
          </Col>
        </Row>
      </Container>
      <Navbar expand="lg" className="nav-items">
        <Container>
          <NavLink className="brand-logo" to="/">
            Garden
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav hamburger "
            style={{ background: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto nav-links">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
