import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../Css/DescriptionPage.scss";

const DescriptionPage = (props) => {
  return (
    <div>
      <Container fluid className="backgroundcolor  padding_responsive">
        <Row className="mt-4">
          <Col className="padding_responsive" xs={12} md={6}>
            <p className="description_title colour_white">
              The Freedom to Create <br></br>The Credit Card You Want
            </p>
          </Col>
          {props.screenSize > 500 ? (
            <Col className="padding_responsive " xs={12} md={6}>
              <p className="description_sub_small colour_white">
                That's why it comes with benefits & rewards chosen by you.
                Available in multiple designs, your card comes in a style
                selected by you. You can come back each year, to edit your
                benefits or update your style.
              </p>
              <br></br>
              <p className="description_sub_small colour_white">
                Your OneSync Credit Card stays true to you, year after year.
                It’s the only card you’ll ever need.
              </p>
              <p className="description_sub colour_white underline">
                Get Started
                <span> {"  >  "} </span>
              </p>
            </Col>
          ) : (
            <Col className="mobile_only" xs={12}>
              <p className="description_sub_small colour_white">
                Build your own Credit Card that fits in your day to day
                lifestyle. First, choose your rewards and then select your card
                design.
              </p>
              <br></br>
              <p className="description_sub_small colour_white">
                Check if the card is available in your city
              </p>
              <Row>
                <Col xs={9}>
                  <Form.Select aria-label="Default select example ">
                    <option>Select City</option>
                    <option value="1">City one</option>
                    <option value="2">City Two</option>
                    <option value="3">City Three</option>
                  </Form.Select>
                </Col>
                <Col xs={3}>
                  {" "}
                  <button className="go_btn">Go</button>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default DescriptionPage;
