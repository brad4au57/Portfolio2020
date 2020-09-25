import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <Row className="fluid-secondary-bg">
      <Container>
        <Row className="text-light mt-5">
          <Col className="col-12 text-center text-md-left">
            <h3>Get In Touch</h3>
            <span>
              Interested in knowing more or wanting to connect?
              <br />
              <span> Drop me a line below!</span>
            </span>
          </Col>
        </Row>
        <Row className="text-light mb-5">
          <Col className="text-center mt-5 mt-md-0 order-md-2 d-flex align-items-center">
            <FaRegPaperPlane className="text-primary send-icon" />
          </Col>
          <Col className="col-11 col-sm-10 col-md-6 mx-auto mx-md-0">
            <Form className="text-left mt-4">
              <Form.Group controlId="formSenderName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter name"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formSenderEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  I'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formSenderMsg">
                <Form.Label>Your message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Enter your message here..."
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                size="lg"
                block
                className="mt-4 font-weight-bold"
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Row>
  );
}
