import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Css/Footer.scss";

const Footer = (props) => {
  console.log(props.screenSize);
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#12193B" }}>
        <Row>
          <Col className="padding_responsive mx-auto" xs={12} md={8}>
            <p className="footer_header_text font_open_sans text-center">
              OneSync Credit Card
            </p>
            <p className="footer_description_text font_open_sans text-center">
              Experience Freedom
            </p>
            <Row>
              <Col>
                <button className=" button_middle mx-auto get_started_footer mt-4 font_robota">
                  Get started{" "}
                </button>
              </Col>
            </Row>
          </Col>
        </Row>

        {props.screenSize > 500 ? (
          <Row className="p-5 mt-1" style={{ borderTop: "1px solid white" }}>
            <Col md={2} xs={12} className="mx-auto">
              <p className="navigation_text font_open_sans">Manage Your Card</p>
              <p className="navigation_text font_open_sans">
                Track Your Application
              </p>
              <p className="navigation_text font_open_sans">Contact Us</p>
            </Col>
            <Col md={2} xs={12} className="mx-auto">
              <p className="navigation_text font_open_sans">Manage Your Card</p>
              <p className="navigation_text font_open_sans">
                Track Your Application
              </p>
              <p className="navigation_text font_open_sans">Contact Us</p>
            </Col>
            <Col md={2} xs={12} className="mx-auto">
              <p className="navigation_text font_open_sans">Manage Your Card</p>
              <p className="navigation_text font_open_sans">
                Track Your Application
              </p>
              <p className="navigation_text font_open_sans">Contact Us</p>
            </Col>
            <Col md={2} xs={12} className="mx-auto">
              <p className="navigation_text font_open_sans">Manage Your Card</p>
              <p className="navigation_text font_open_sans">
                Track Your Application
              </p>
              <p className="navigation_text font_open_sans">Contact Us</p>
            </Col>
          </Row>
        ) : (
          <Row className="p-3 mt-1" style={{ borderTop: "1px solid white" }}>
            <Col xs={12}>
              <p className="navigation_text font_open_sans">Manage Your Card</p>
              <p className="navigation_text font_open_sans">
                Track Your Application
              </p>
              <p className="navigation_text font_open_sans">Contact Us</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Footer;
