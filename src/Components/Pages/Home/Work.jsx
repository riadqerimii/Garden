import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.css";

import pool from "./img/Farm-house.avif";

export default function Work() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="work" className="py-5 my-5">
      <Container fluid>
        <Row className="pt-5">
          <Col lg={6} md={12} className={` pt-5 ${styles.text}`}>
            <h1 data-aos="fade-up" className="py-5">
              Machen Sie Ihren Hinterhof zu einem einladenden Ort, an dem
              <b> Sie und Ihre Familie </b>
              sich darauf freuen, gemeinsam Zeit zu verbringen.
            </h1>
            <h5 data-aos="fade-up" className="py-3">
              "Genießen Sie mit Ihrer Familie gemeinsame Mahlzeiten und
              Grillabende in einer üppigen Umgebung, geschaffen von GARDEN Es
              gibt keine Grenzen für das, was wir für
              <b>Sie und Ihre Familie</b>
              schaffen können. Wenn Sie einen Pool wünschen, der Ihren Stil und
              Geschmack ausdrückt, können wir das für Sie bauen. Vielleicht
              suchen Sie nach einem Whirlpool oder einer Fontäne. Der Fantasie
              sind keine Grenzen gesetzt, wenn es darum geht, was unser Team für
              Sie entwerfen kann. Ob Ihr Garten groß oder klein ist, wir werden
              den Raum maximieren und nutzen, um eine private, intime Umgebung
              für Sie und Ihre Familie zu schaffen"
            </h5>
          </Col>
          <Col lg={6} md={12} className={`pt-5  ${styles.work}`}>
            <img data-aos="fade-in" src={pool} alt="backyard" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
