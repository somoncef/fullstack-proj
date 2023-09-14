import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/luxc.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              Welcome to our premier car rental service! With a commitment to excellence and customer satisfaction, we offer a seamless and convenient way to fulfill your transportation needs. Our diverse fleet of vehicles caters to every occasion, whether it's a business trip, family vacation, or special event. Backed by years of experience in the industry, we take pride in delivering top-notch service, well-maintained vehicles, and competitive pricing. Discover the joy of hassle-free travel with us today.
              </p>

               

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
  <div className="about__img">
    <img src={aboutImg} alt="" className="w-100" style={{ height: '500px' }} />
  </div>
</Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
