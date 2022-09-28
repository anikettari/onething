import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import insurance from "../Images/insurance.png";
import Animation from "../Images/Animation.png";
import "../Css/FormComponent.scss";

const FormComponent = (props) => {
  return (
    <div>
      <Container fluid className=" ">
        <Row>
          <Col className="padding_responsive form_background" xs={12} md={6}>
            {props.screenSize > 500 ? (
              <Form className="padding_responsive">
                <Form.Group className="p-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    className="input_placeholder"
                  />
                </Form.Group>

                <Form.Group className="p-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your PAN number"
                    className="input_placeholder"
                  />
                </Form.Group>

                <Form.Group className="p-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Address"
                    className="input_placeholder"
                  />
                </Form.Group>
              </Form>
            ) : (
              <Col>
                <Row>
                  <img src={Animation}></img>
                </Row>
              </Col>
            )}
          </Col>
          <Col className="border_simple padding_responsive mt-3" xs={12} md={6}>
            {props.screenSize > 780 ? (
              <Row>
                <Col>
                  <img src={insurance}></img>
                </Col>
              </Row>
            ) : (
              <></>
            )}

            <p className="description_title">Fill Eligibility Form</p>
            {props.screenSize > 780 ? (
              <p className="description_sub">
                Tell us about yourself, to find out if you’re eligible to apply.
              </p>
            ) : (
              <p className="description_sub">
                Please fill an application form to make sure you’re eligible for
                the card. You can fill this later as well<br></br>
                <br></br>
                Get Started
                <span> {"  >  "} </span>
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormComponent;
