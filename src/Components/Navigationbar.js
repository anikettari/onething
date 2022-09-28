import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Images/Logo.png";
import "./Css/Navbar.scss";

const Navigationbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container fluid>
          <Navbar.Brand className="text_one">
            <img src={Logo} className="nav_padding_left"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="nav_padding_right">
              <Nav.Link>
                <p className="text_one m-2">Track Application</p>
              </Nav.Link>
              <Nav.Link>
                <p className="text_one m-2">Manage My Card</p>
              </Nav.Link>
              <Nav.Link>
                <p className="text_one m-2">FAQs</p>
              </Nav.Link>
              <Nav.Link>
                <button className="get_started_btn_nav">Get Started</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
