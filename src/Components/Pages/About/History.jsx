import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutStyles from "./About.module.css";
import image from "../Home/img/Garden-1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

function History() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} md={12} className={`pt-5 p-5  m-0 ${aboutStyles.texts} `}>
            <h1 data-aos="fade-up" className={aboutStyles.text}>
              Geschichte des Gartens
            </h1>
            <h2 className="p-2 py-3" data-aos="fade-up">
              Gärtnerei Meier - Gschicht vo der Firma
            </h2>
            <p data-aos="fade-up" className="p-2 py-4">
              D'Gärtnerei Meier isch im Johr 1950 vo Hans Meier gründet worde.
              <br />
              Hans het sini Liebi zu Blueme und Garte in sini eiget Firma
              yybracht.
              <br />
              Uf Aafang het er eifach Blume gverchauft und Garte
              <br />
              gstaltet, aber mit de Johre het sich s'Unternehme wyterentwicklet.
              <br />
              In de 1960er und 1970er Johre het d'Gärtnerei Meier ihres
              Sortiment erweitert und
              <br />
              isch bekannt worde für di hochwertige
              <br />
              Blume und Pflanze. Hans Meier het au Innovative Methoden in de
              <br />
              Garteplanig igfüehrt, wodurch sini Firma s'Sigle "Experte für
              <br />
              Garte" verdient het.
            </p>
          </Col>
          <Col data-aos="fade-up" lg={6} md={12} className="pt-5 m-0 p-0">
            <img className={aboutStyles.images} src={image} alt="gardens" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default History;
