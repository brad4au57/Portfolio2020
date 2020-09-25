import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

export default function Projects(props) {
  const imageName = props.title + " Thumbnail";

  return (
    <Container className="projects-container">
      <Row>
        <Col className="col-12 col-md-3 my-4 mx-auto text-center image-container">
          <Image
            className="mw-100 project-image"
            src={props.img}
            alt={imageName}
            sphere
          />
        </Col>
        <Col className="col-12 col-md-9 my-4 text-light">
          <h5>{props.title}</h5>
          <Badge pill variant="primary" className="my-3">
            {props.year}
          </Badge>
          <span className="ml-3 text-primary">{props.role}</span>
          <div className="mb-3">
            <strong>Tech Stack: </strong>{" "}
            <span className="text-primary">{props.tech.join(", ")}</span>
          </div>
          <p className="text-light">{props.description}</p>
        </Col>
        <Col></Col>
      </Row>
      <hr className="text-light" />
    </Container>
  );
}
