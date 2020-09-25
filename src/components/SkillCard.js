import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
// Icons
import { FaCode, FaCogs } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function SkillCard(props) {
  const ICONS_TAG = {
    FaCode: <FaCode />,
    FaCogs: <FaCogs />,
    AiOutlineSafetyCertificate: <AiOutlineSafetyCertificate />
  };
  const iconTag = props.icon;

  return (
    <Col className="col-12 col-lg-4 mb-5">
      <Card className="bg-dark text-light text-center p-4">
        <Card.Body className="pt-0">
          <div className="text-primary display-1 mb-4">
            {ICONS_TAG[iconTag]}
          </div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
