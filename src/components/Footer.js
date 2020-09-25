import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCodepen,
  FaRegCopyright
} from "react-icons/fa";

export default function Footer() {
  return (
    <Row id="footer">
      <Col className="col-12">
        <Nav
          id="footer-nav"
          className=" col-12 px-0 py-3 justify-content-center"
        >
          <Nav.Item className="text-light">
            <FaGithub />
          </Nav.Item>
          <Nav.Item className="text-light ml-5">
            <FaLinkedin />
          </Nav.Item>
          <Nav.Item className="text-light ml-5">
            <FaTwitter />
          </Nav.Item>
          <Nav.Item className="text-light ml-5">
            <FaCodepen />
          </Nav.Item>
        </Nav>
      </Col>
      <Col className="col-12  mb-4">
        <p className="text-light text-center">
          Copyright <FaRegCopyright /> {new Date().getFullYear()} Brad Bales.
          All Rights Reserved
        </p>
      </Col>
    </Row>
  );
}
