import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home.module.css";

import image1 from "./img/imag-1.avif";
import image2 from "./img/image-2.avif";
import image3 from "./img/image-3.avif";

const carouselItems = [
  {
    image: image1,
    id: 1,
    buttonText: "Sieh mehr",
    buttonLink: "/projectone",
    text: "“Projekt in Arbeit...”",
  },
  {
    image: image2,
    id: 2,
    buttonText: "Projekte anzeigen",
    buttonLink: "/projecttwo",
    text: "“Fertigstellung der Arbeiten...”",
  },
  {
    image: image3,
    id: 3,
    buttonText: "Kontaktieren Sie uns",
    buttonLink: "/projectthree",
    text: "“Gartenarbeit...”",
  },
];

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);

  function handleNext() {
    setCurrentItem((prevItem) => (prevItem + 1) % carouselItems.length);
  }

  function handlePrev() {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + carouselItems.length) % carouselItems.length
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentItem]);

  return (
    <Container fluid className={`m-0 p-0 ${styles.cont}`}>
      <img
        className={`w-100 ${styles.homeImg}`}
        src={carouselItems[currentItem].image}
        alt="Garden"
      />
      <Row className={`p-0 m-0 ${styles.rows}`}>
        <Col sm={12} className="text-center text-white pb-5">
          <h1 className={`pb-3 m-3 ${styles.h1}`}>
            {carouselItems[currentItem].text}
          </h1>
          <button
            className={styles.link}
            href={carouselItems[currentItem].buttonLink}
          >
            {carouselItems[currentItem].buttonText}
          </button>
        </Col>
        <div className="  d-flex  justify-content-between w-100 p-0 m-0">
          <button className={styles.btnPrev} onClick={handlePrev}>
            ◀
          </button>
          <button className={styles.btnNext} onClick={handleNext}>
            ▶
          </button>
        </div>
      </Row>
    </Container>
  );
}
