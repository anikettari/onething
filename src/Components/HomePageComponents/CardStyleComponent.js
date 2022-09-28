import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Css/CardStyleComponent.scss";
import { Carousel } from "react-responsive-carousel";
import main from "../Images/main.png";
import paintroller from "../Images/paint-roller.png";

const CardStyleComponent = (props) => {
  return (
    <div>
      <Container fluid className="card_background">
        <Row>
          <Col className="padding_responsive" xs={12} md={6}>
            <Carousel
              autoPlay={true}
              transitionTime={2000}
              infiniteLoop={true}
              showStatus={false}
            >
              <div className="atm_card_image">
                <img src={main} />
              </div>
              <div className="atm_card_image">
                <img src={main} />
              </div>
              <div className="atm_card_image">
                <img src={main} />
              </div>
              <div className="atm_card_image">
                <img src={main} />
              </div>
            </Carousel>
          </Col>

          <Col className="padding_responsive" xs={12} md={6}>
            {props.screenSize > 500 ? (
              <Row>
                <Col>
                  <img src={paintroller}></img>
                </Col>
              </Row>
            ) : (
              <></>
            )}
            <p className="description_title">Select Your Style</p>
            {props.screenSize > 500 ? (
              <p className="description_sub">
                Match your card to your personality. Whether you like a minimal
                look or something that catches everyone’s eyes, we’ve got a
                style for you. You can update your style every year, for a small
                fee
              </p>
            ) : (
              <p className="description_sub">
                Whether you like a minimal look or something that catches
                everyone’s eyes. We have a Card design for you<br></br>{" "}
                <br></br>
                <p className="description_sub underline">Get Started{" > "}</p>
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardStyleComponent;
