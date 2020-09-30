import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";

export default function Projects() {
  

  return (
    <Container className="projects-container">
      <Row>
        <Col className="col-12 text-center text-lg-left text-light my-2">
          <h3>Featured Projects</h3>
        </Col>
      </Row>
      {projectData.map((data) => (
        <ProjectCard
          key={data.title}
          title={data.title}
          img={data.img}
          year={data.year}
          role={data.role}
          description={data.description}
          tech={data.technologies}
        />
      ))}
    </Container>
  );
}
