import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Contact.module.css";

import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <section className="bg-dark text-white ">
      <Container>
        <Row className="text-center pt-5">
          <h1 className="text-white">Garden (logo)</h1>
        </Row>
        <Row className={` pt-5 pb-3 text-center ${styles.footer}`}>
          <Col sm={6} md={2}>
            <h5>
              <a href="/">Overwiev</a>
            </h5>
          </Col>
          <Col sm={6} md={2}>
            <h5>
              <a href="/">Features</a>
            </h5>
          </Col>
          <Col sm={6} md={2}>
            <h5>
              <a href="/">Help</a>
            </h5>
          </Col>
          <Col sm={6} md={2}>
            <h5>
              <a href="/">Careers</a>
            </h5>
          </Col>
          <Col sm={6} md={2}>
            <h5>
              <a href="/">Pricing</a>
            </h5>
          </Col>
          <Col sm={6} md={2}>
            <h5>
              <a href="/">Privacy</a>
            </h5>
          </Col>
        </Row>
        <div className={styles.div}></div>
        <Row className="pt-3">
          <Col md={6} className="text-center pt-3">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="mx-3 icons text-white"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="mx-3 icons text-white"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="mx-3 icons text-white"
            />
          </Col>
          <Col md={6} className="text-center pt-3">
            <p>&copy; 2023 Design. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
