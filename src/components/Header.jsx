import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaJs, FaYarn, FaBolt, FaBootstrap } from "react-icons/fa";
import image from "../assets/image.png";

const Header = () => {
  return (
    <header
      className="py-3 shadow"
      style={{
        background: "linear-gradient(90deg, #ff7f50, #32cd32, #1e90ff, black)",
      }}
    >
      <Container className="position-relative d-flex justify-content-center align-items-center">
        {/* Left - Logo */}
        <div className="position-absolute start-0 d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={image}
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </Navbar.Brand>
        </div>

        {/* Center - Tech Stack */}
        <div className="d-flex align-items-center gap-4 text-white, green fw-semibold fs-6">
          <div className="d-flex flex-column align-items-center">
            <FaJs size={20} />
            <span>JS</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <FaYarn size={20} />
            <span>Yarn</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <FaBolt size={20} />
            <span>Vite</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <FaBootstrap size={20} />
            <span>BS</span>
          </div>
        </div>

        {/* Right - Login/Signup */}
        <div className="position-absolute end-0 d-flex gap-2">
          <Nav.Link
            as={Link}
            to="/login"
            className="btn btn-sm btn-light text-light"
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/signup"
            className="btn btn-sm btn-outline-light text-light"
          >
            Sign Up
          </Nav.Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
