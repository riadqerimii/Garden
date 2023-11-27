import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Home.module.css";
import gardens from "./img/Golf house.jpg";
import gardenss from "./img/Garden-1.jpg";

export default function Cont() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="pt-5">
      <Container fluid>
        <Row>
          <Col
            lg={3}
            md={6}
            sm={12}
            className={`text-center p-0 m-0  ${styles.background}`}
          >
            <h1 data-aos="fade-up" className="p-5">
              Geneva
            </h1>
            <p data-aos="fade-up">Street: 22, Route de Sauverny</p>
            <button className=" m-5  text-center justify">
              Kontaktieren Sie uns
            </button>
          </Col>
          <Col className="p-0 m-0" lg={3} md={6} sm={12}>
            <img
              className={styles.gardens}
              src={gardens}
              alt="gardens
            "
            />
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className={`text-center p-0 m-0  ${styles.backgrounds}`}
          >
            <h1 data-aos="fade-up" className="p-5">
              Zurich
            </h1>
            <p data-aos="fade-up">Street: 22, Route de Sauverny</p>
            <button className=" m-5  text-center justify">
              Kontaktieren Sie uns
            </button>
          </Col>
          <Col className="p-0 m-0" lg={3} md={6} sm={12}>
            <img
              className={styles.gardens}
              src={gardenss}
              alt="gardens
            "
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
