import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import "../Css/FAQComponent.scss";

const FAQComponent = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="padding_responsive mx-auto" xs={12} md={8}>
            <p className="description_title text-center">FAQs</p>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="faq_text_header">
                    Who’s eligible for the Card?{" "}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq_text_ans">
                    If you’re between 23-60 years of age, have a monthly income
                    of ₹25,000 or more, and have never defaulted on a credit
                    card or loan payment, we’d encourage you to apply. However,
                    your application will be declined if your location isn’t
                    serviceable or if your credit score is low.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p className="faq_text_header">Is my location serviceable?</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq_text_ans">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p className="faq_text_header">
                    What if I don’t want to pay at all?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq_text_ans">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <p className="faq_text_header">
                    What happens after I’ve build my card?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq_text_ans">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQComponent;
