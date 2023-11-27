import React from "react";
import Carousel from "./Carousel";
import Blog from "./Blog";
import Work from "./Work";
import Cont from "./Cont";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <section id="home">
        <Carousel />
        <Blog />
        <Work />
        <Cont />
        <Footer />
      </section>
    </>
  );
}

export default Home;
