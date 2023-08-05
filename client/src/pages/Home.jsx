import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/pages/Home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButton = () => {
    navigate("/login"); // Navigate to the login screen
  };
  return (
    <div className="home">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/firebg.mp4" type="video/mp4" />
      </video>
      <div className="content-overlay">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={6} className="text-center">
              <h1>Welcome to Weekend Squad</h1>
              <p>Explore amazing destinations and plan your next adventure.</p>
              <Button onClick={handleButton} variant="outline-info">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
