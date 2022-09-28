import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./HomePageComponents/Footer";
import HeadlinePage from "./HomePageComponents/HeadlinePage";
import DescriptionPage from "./HomePageComponents/DescriptionPage";
import FormComponent from "./HomePageComponents/FormComponent";
import RewardComponent from "./HomePageComponents/RewardComponent";
import CardStyleComponent from "./HomePageComponents/CardStyleComponent";
import FAQComponent from "./HomePageComponents/FAQComponent";
import "./Css/common.scss";

const HomePage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div>
      <HeadlinePage />
      <DescriptionPage screenSize={windowSize.innerWidth} />

      <FormComponent screenSize={windowSize.innerWidth} />

      <RewardComponent screenSize={windowSize.innerWidth} />

      <CardStyleComponent screenSize={windowSize.innerWidth} />

      {windowSize.innerWidth < 780 ? (
        <Container fluid className="backgroundcolor">
          <Row className="pt-4">
            <Col xs={12}>
              <p className="description_title colour_white">
                Why the OneSync Card is the Best Choice for you?
              </p>
              <p className="description_sub_small colour_white">
                You can create a Credit Card that fits all your needs on your
                own. Gone are the days when you had choose from premade credit
                cards with features that you did not need.{" "}
              </p>
              <p className="description_sub_small colour_white">
                With the OneSync card you can save on all the things that you
                love to do with a unique personal touch
              </p>
              <p className="description_sub colour_white">
                Get Started
                <span> {"  >  "} </span>
              </p>
            </Col>
          </Row>
        </Container>
      ) : (
        <></>
      )}

      <FAQComponent />

      <Footer screenSize={windowSize.innerWidth} />
    </div>
  );
};

export default HomePage;
