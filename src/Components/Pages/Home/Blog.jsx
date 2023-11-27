import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import river from "./img/image-5.avif";
import farm from "./img/Farm-house.avif";
import golf from "./img/Golf-house.avif";
import mill from "./img/image-6.avif";
import pool from "./img/Bahams.avif";
import villa from "./img/Bahamas villas.avif";

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className={styles.blog}>
      <div className="pt-5">
        <h1
          data-aos="fade-up"
          className="text-center  "
          style={{
            fontWeight: "600",
            color: "White",
            fontFamily: "Montserrat",
          }}
        >
          Unsere Projekte
          <Container>
            <div className={styles.border}></div>
          </Container>
        </h1>
      </div>
      <Container fluid className="pt-5 pb-0  m-0">
        <Row className={`pt-5 ${styles.blogImg}`}>
          <Col
            data-aos="fade-up"
            lg={4}
            md={6}
            sm={12}
            className="p-0 m-0 position-relative"
          >
            <img src={river} alt="river-house" />
            <a className={styles.overlayText} href="./" alt="asdad">
              Fluss-Haus
            </a>
          </Col>
          <Col
            data-aos="fade-up"
            lg={4}
            md={6}
            sm={12}
            className="p-0 m-0 position-relative"
          >
            <img src={golf} alt="golf-house" />
            <a className={styles.overlayText} href="./" alt="asdad">
              Golfhaus
            </a>
          </Col>
          <Col
            data-aos="fade-up"
            lg={4}
            md={6}
            sm={12}
            className="p-0 m-0 position-relative"
          >
            <img src={pool} alt="golf-house" />
            <a className={styles.overlayText} href="./" alt="asdad">
              Pool House
            </a>
          </Col>
          <Col
            data-aos="fade-up"
            lg={4}
            md={6}
            sm={12}
            className="p-0 m-0 position-relative"
          >
            <img src={farm} alt="golf-house" />
            <a className={styles.overlayText} href="./" alt="asdad">
              Herrenfarm
            </a>
          </Col>
          <Col
            data-aos="fade-up"
            lg={4}
            md={6}
            sm={12}
            className="p-0 m-0 position-relative"
          >
            <img src={mill} alt="golf-house" />
            <a className={styles.overlayText} href="./" alt="asdad">
              Spring Mill
            </a>
          </Col>
          <Col
            data-aos="fade-up"
            lg={4}
            md={6}
            sm={12}
            className="p-0 m-0 position-relative"
          >
            <img src={villa} alt="golf-house" />
            <a className={styles.overlayText} href="./" alt="asdad">
              Bahamas Villa
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
