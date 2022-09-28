import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Reqardcarousel from "../Reqardcarousel";
import networking from "../Images/networking.png";
import "../Css/RewardComponent.scss";

const RewardComponent = (props) => {
  return (
    <div>
      <Container fluid className="padding_responsive reward_Background">
        <Row>
          <Col className="padding_responsive" xs={12} md={6}>
            {props.screenSize > 500 ? (
              <Row>
                <Col>
                  <img src={networking}></img>
                </Col>
              </Row>
            ) : (
              <></>
            )}
            <p className="description_title">Choose Your Rewards</p>
            <p className="description_sub">
              Match your card to your lifestyle. We’ve got benefits from across
              brands & categories for you to choose from. Each benefit has an
              attached fee. Just add the ones you like to your card.
            </p>
          </Col>
          <Col className="padding_responsive" xs={12} md={6}>
            <Reqardcarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RewardComponent;
