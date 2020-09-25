import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePic from "../img/profile.png";
import Button from "react-bootstrap/Button";

export default function Hero() {
  return (
    <Row>
      <Col className=" text-center col-12 col-md-4 offset-md-1 order-md-2 d-flex align-items-center">
        <img
          src={profilePic}
          alt="profile-avatar"
          id="profile-avatar"
          className="mx-auto"
        ></img>
      </Col>
      <Col className="text-light text-center text-md-left col-md-7 mt-5">
        <h1>
          Hi, I am Brad, <br /> Software Development Professional
        </h1>
        <p className="mt-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button
          variant="primary"
          type="button"
          className="mt-4 font-weight-bold px-4 py-2"
        >
          Download R&eacute;sum&eacute;
        </Button>
      </Col>
    </Row>
  );
}
