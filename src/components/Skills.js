import React from "react";
// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Card Data
import cardData from "../data/cardData";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Row className="fluid-secondary-bg angled-bg">
      <Container>
        <Row className="my-4">
          <Col className="col-12 text-center text-lg-left text-light my-2">
            <h3>Technical Skills</h3>
          </Col>
        </Row>
        <Row>
          {cardData.map((data) => (
            <SkillCard
              key={data.title}
              title={data.title}
              body={data.body}
              icon={data.icon}
            />
          ))}
        </Row>
      </Container>
    </Row>
  );
}
