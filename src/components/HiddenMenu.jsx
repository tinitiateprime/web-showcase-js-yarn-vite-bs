import React from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const HiddenMenu = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Hidden Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
          <Nav.Link as={Link} to="/services" onClick={handleClose}>Services</Nav.Link>
          <Nav.Link as={Link} to="/profile" onClick={handleClose}>Profile</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HiddenMenu;
