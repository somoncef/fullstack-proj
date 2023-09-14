import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem    } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
    
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const  isLoggedIn =  !!localStorage.token ; 
  const filteredNavLinks = quickLinks.filter(link => {
    return !isLoggedIn || link.path !== "/contact";
  }); 
   
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Welcome to our premier car rental service! With a commitment to excellence and customer satisfaction, we offer a seamless and convenient way to fulfill your transportation needs. Our diverse fleet of vehicles caters to every occasion, whether it's a business trip, family vacation, or special event. Backed by years of experience in the industry, we take pride in delivering top-notch service, well-maintained vehicles, and competitive pricing. Discover the joy of hassle-free travel with us today.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {filteredNavLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Casablanca, Morroco</p>
              <p className="office__info">Phone: +212 688167585</p>

              <p className="office__info">Email: somoncef@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

           

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Moncef Souri. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
