import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gif from "../Images/gif.png";
import "../Css/HeadlinePage.scss";

const HeadlinePage = () => {
  return (
    <div>
      {" "}
      <Container fluid>
        <Row className="mt-4 padding_responsive">
          <Col className="border_simple padding_responsive" xs={12} md={6}>
            <p className="description_title description_sub_center">
              Build a Credit card <br></br>That is Definitely Yours
            </p>
            <p className="description_sub description_sub_center">
              with the oneSync credit card you can customise your card the way
              you want
            </p>
            <Row>
              <Col className="container_middle">
                <button className="get_started_btn_nav get_started_btn_nav-two">
                  Get started{" "}
                </button>
              </Col>
            </Row>
          </Col>
          <Col className="border_simple" xs={12} md={6}>
            <img src={gif} style={{ height: "auto", width: "100%" }}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeadlinePage;
