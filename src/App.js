import React from "react";
import "./styles.css";
import "./App.scss";

import Container from "react-bootstrap/Container";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    
    <Container fluid>
      <SiteNav/>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}
