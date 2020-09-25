import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { VscMenu } from "react-icons/vsc";

export default function SiteNav() {
  return (
    <Navbar bg="dark" expand="md" className="px-0">
      <Navbar.Brand href="#home" className="text-light">
        BB
      </Navbar.Brand>
      <Navbar.Toggle variant="dark" aria-controls="basic-navbar-nav">
        <VscMenu />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="site-nav">
          <Nav.Link href="#home" className="text-light active ml-md-4">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="text-light ml-md-4">
            Skills
          </Nav.Link>
          <Nav.Link href="#link" className="text-light ml-md-4">
            Projects
          </Nav.Link>
          <Nav.Link href="#link" className="text-light ml-md-4">
            Social
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
