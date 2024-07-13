import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Collapse,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CollapseDarkModeCarousel.css"; // Custom CSS file for dark mode

const CollapseDarkModeCarousel = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Container>
        <Row>
          <Col>
            <h1>Hello, Collapse, Dark Mode, and Carousel!</h1>
            <p>This is your content...</p>
            <Button variant="primary" onClick={toggleDarkMode}>
              Toggle Dark Mode
            </Button>
            <Button variant="primary" onClick={toggleCollapse}>
              Toggle Collapse
            </Button>
            <Collapse in={open}>
              <div>
                <p>This is the content of the Collapse component.</p>
              </div>
            </Collapse>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Slide+1"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Slide+2"
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Slide+3"
                  alt="Slide 3"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CollapseDarkModeCarousel;
