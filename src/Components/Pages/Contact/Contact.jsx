import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import style from "./Contact.module.css";
import Footer from "./Footer";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section>
      <Container className="p-5">
        <Row className="text-center">
          <Col data-aos="fade-up" className={style.contact} md={6} sm={12}>
            <h1>Geneva</h1>
            <p data-aos="fade-up">
              Street:
              <br /> 22, Route de Sauverny
            </p>
            <a className="number " href="+41 123 45 67">
              <FaPhone /> + 041-123-45-67
            </a>
          </Col>
          <Col data-aos="fade-up" md={6} sm={12}>
            <h1 data-aos="fade-up">Zurich</h1>
            <p data-aos="fade-up">
              Street:
              <br /> 22, Route de Sauverny
            </p>
            <a className="number " href="+41 123 45 67">
              <FaPhone /> + 041-123-45-67
            </a>
          </Col>
        </Row>
        <Row className="h-100 pt-5  " data-aos="fade-up">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44180.523988245506!2d6.14303885!3d46.20483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357b0bbc39!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2s!4v1701094109567!5m2!1sen!2s"
            width="100%"
            height="600"
            style={{ border: "0" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default Contact;
