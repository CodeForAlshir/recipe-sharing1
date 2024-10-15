import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-warning text-dark py-4">
      <Container>
        <Row>
          {/* About Us Column */}
          <Col md={4} className="mb-3">
            <h4>About Us</h4>
            <p>HI WE ARE Arxcher. This website is to have you share our recipe.</p>
          </Col>

          {/* Quick Links Column */}
          <Col md={4} className="mb-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/AboutUs" className="text-light">About us</Link></li>
              <li><Link to="/Creator" className="text-light">Creator</Link></li>
            </ul>
          </Col>

          {/* Contact Us Column */}
          <Col md={4} className="mb-3">
            <h4>Contact Us</h4>
            <address>
             
              Email: <a href="mailto:Arxcher@gmail.com" className="text-light">Arxcher@gmail.com</a><br />
              Phone: <a href="tel:(123)456-7890" className="text-light">+639785712013</a>
            </address>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">&copy; 2024 Arxcher. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
