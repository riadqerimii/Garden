import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./About.module.css"; // Import your styles module
import { data } from "./Data";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [display, setDisplay] = useState(1);

  const [image, setImage] = useState(0);

  function nextButton() {
    if (image === data.length - 1) {
      setImage(0);
      return;
    }
    setImage(image + 1);
  }

  function prevButton() {
    if (image === 0) {
      setImage(data.length - 1);
      return;
    }
    setImage(image - 1);
  }

  function showTab(id) {
    setDisplay(id);
  }

  return (
    <Container className={styles.container}>
      <Row className={styles.testimonials}>
        <Row className=" p-5">
          <Col
            md={4}
            sm={12}
            data-aos="fade-up"
            className={styles.cols}
            onClick={() => showTab(1)}
          >
            Alle Projekte
          </Col>
          <Col
            md={4}
            sm={12}
            data-aos="fade-up"
            className={styles.col}
            onClick={() => showTab(2)}
          >
            Geneva{" "}
          </Col>
          <Col
            md={4}
            sm={12}
            className={styles.colon}
            data-aos="fade-up"
            onClick={() => showTab(3)}
          >
            Zurich{" "}
          </Col>
        </Row>
        <div className={display === 1 ? styles.show : styles.hide}>
          <Row>
            <Col md={6}>
              <img
                className={`${styles.imagesAbout}`}
                src={data[image]}
                alt="someone"
              />
              <div>
                <button className={` ${styles.next} `} onClick={prevButton}>
                  ◀
                </button>
                <button className={` ${styles.prev} `} onClick={nextButton}>
                  ▶
                </button>
              </div>
            </Col>
            <Col md={6}>
              <h1 data-aos="fade-up" className="pt-3">
                Unsere Projekte
              </h1>
              <h3 data-aos="fade-up" className="p-4 ">
                Entdecken Sie die Vielfalt unserer abgeschlossenen Projekte und
                lassen Sie sich von unserer Expertise inspirieren.
              </h3>
              <p data-aos="fade-up">
                Unsere engagierten Teams haben mit Leidenschaft an einer
                Vielzahl von Projekten gearbeitet, um innovative Lösungen und
                herausragende Ergebnisse zu erzielen.
              </p>
              <p data-aos="fade-up">
                Von Garten- und Landschaftsgestaltung bis hin zu umfangreichen
                Bauprojekten - unsere Projekte spiegeln unsere Hingabe zu
                Qualität und Kreativität wider.
              </p>
            </Col>
          </Row>
        </div>
        <div
          data-aos="fade-up"
          className={display === 2 ? styles.show : styles.hide}
        >
          <Row>
            <Col md={6}>
              <img
                className={`${styles.imagesAbout}`}
                src={data[image]}
                alt="someone"
              />
              <div>
                <button
                  data-aos="fade-up"
                  className={` ${styles.next} `}
                  onClick={prevButton}
                >
                  ◀
                </button>
                <button
                  data-aos="fade-up"
                  className={` ${styles.prev} `}
                  onClick={nextButton}
                >
                  ▶
                </button>
              </div>
            </Col>
            <Col md={6}>
              <h1 data-aos="fade-up" className="pt-3">
                Unsere Arbeit in Genf
              </h1>
              <h3 className="p-2 ">
                Entdecken Sie die Vielfalt unserer abgeschlossenen Projekte in
                Genf und lassen Sie sich von unserer Expertise inspirieren.
              </h3>
              <p>
                Unsere engagierten Teams haben mit Leidenschaft an einer
                Vielzahl von Projekten in Genf gearbeitet, um innovative
                Lösungen und herausragende Ergebnisse zu erzielen.
              </p>
              <p>
                Von Garten- und Landschaftsgestaltung bis hin zu umfangreichen
                Bauprojekten - unsere Projekte in Genf spiegeln unsere Hingabe
                zu Qualität und Kreativität wider.
              </p>
              <p>
                Wir sind stolz darauf, Teil der Genfer Gemeinschaft zu sein und
                durch unsere Arbeit zur Schönheit und Funktionalität der Stadt
                beizutragen.
              </p>
            </Col>
          </Row>
        </div>
        <div className={display === 3 ? styles.show : styles.hide}>
          <Row>
            <Col md={6} data-aos="fade-up">
              <img
                className={`${styles.imagesAbout}`}
                src={data[image]}
                alt="someone"
              />
              <div data-aos="fade-up">
                <button className={` ${styles.next} `} onClick={prevButton}>
                  ◀
                </button>
                <button className={` ${styles.prev} `} onClick={nextButton}>
                  ▶
                </button>
              </div>
            </Col>
            <Col md={6}>
              <h1 data-aos="fade-up" className="pt-3">
                Unsere Arbeit in Zürich
              </h1>
              <h3 data-aos="fade-up" className="p-2 ">
                Entdecken Sie die Vielfalt unserer abgeschlossenen Projekte in
                Zürich und lassen Sie sich von unserer Expertise inspirieren.
              </h3>
              <p data-aos="fade-up">
                Unsere engagierten Teams haben mit Leidenschaft an einer
                Vielzahl von Projekten in Zürich gearbeitet, um innovative
                Lösungen und herausragende Ergebnisse zu erzielen.
              </p>
              <p data-aos="fade-up">
                Von Garten- und Landschaftsgestaltung bis hin zu umfangreichen
                Bauprojekten - unsere Projekte in Zürich spiegeln unsere Hingabe
                zu Qualität und Kreativität wider.
              </p>
              <p data-aos="fade-up">
                Wir sind stolz darauf, Teil der Zürcher Gemeinschaft zu sein und
                durch unsere Arbeit zur Schönheit und Funktionalität der Stadt
                beizutragen.
              </p>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default Testimonials;
