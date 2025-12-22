import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      {/* Header */}
      <Row>
        <Col className="p-0">
          <Header />
        </Col>
      </Row>

      {/* Main Section */}
      <Row className="flex-grow-1">
        {/* Left Sidebar */}
        <Col
          md={3}
          className="p-3 d-none d-md-block overflow-auto"
          style={{ backgroundColor: "#f8f9fa", borderRight: "1px solid #dee2e6" }}
        >
          <LeftSidebar />
        </Col>

        {/* Main Content */}
        <Col xs={12} md={6} className="p-4 bg-white overflow-auto">
          {children}
        </Col>

        {/* Right Sidebar */}
        <Col
          md={3}
          className="p-3 d-none d-md-block overflow-auto"
          style={{ backgroundColor: "#f8f9fa", borderLeft: "1px solid #dee2e6" }}
        >
          <RightSidebar />
        </Col>
      </Row>

      {/* Footer */}
      <Row>
        <Col className="p-0">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
