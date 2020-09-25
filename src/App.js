import React from "react";
import "./styles.css";
import "./App.scss";
import projectData from "./data/projectData";

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
      <Container>
        <SiteNav />
        <div className="spacer"></div>
        <Hero />
        <div className="spacer"></div>
      </Container>
      <Skills />
      {projectData.map((data) => (
        <Projects
          key={data.title}
          title={data.title}
          img={data.img}
          year={data.year}
          role={data.role}
          description={data.description}
          tech={data.technologies}
        />
      ))}
      <div className="spacer"></div>
      <Contact />
      <Footer />
    </Container>
  );
}
