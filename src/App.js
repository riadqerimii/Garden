import React from "react";

import "./App.css";
import About from "./Components/Pages/About/About.jsx";
import Contact from "./Components/Pages/Contact/Contact.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import Navbar from "./Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
