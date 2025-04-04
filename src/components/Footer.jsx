import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <div className="row">
              <div className="col mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </div>
            </div>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <div className="footer-links">
                  <p><a href="#" alt="footer link">Audio and Subtitles</a></p>
                  <p><a href="#" alt="footer link">Media Center</a></p>
                  <p><a href="#" alt="footer link">Privacy</a></p>
                  <p><a href="#" alt="footer link">Contact us</a></p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p><a href="#" alt="footer link">Audio Description</a></p>
                  <p><a href="#" alt="footer link">Investor Relations</a></p>
                  <p><a href="#" alt="footer link">Legal Notices</a></p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p><a href="#" alt="footer link">Help Center</a></p>
                  <p><a href="#" alt="footer link">Jobs</a></p>
                  <p><a href="#" alt="footer link">Cookie Preferences</a></p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p><a href="#" alt="footer link">Gift Cards</a></p>
                  <p><a href="#" alt="footer link">Terms of Use</a></p>
                  <p><a href="#" alt="footer link">Corporate Information</a></p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
