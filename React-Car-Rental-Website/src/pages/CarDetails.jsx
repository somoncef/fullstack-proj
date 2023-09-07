import React, {useState, useEffect } from "react";

import axios from "axios";  
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom"; 
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CarDetails = () => {
  const { slug } = useParams();
const navigate = useNavigate();
   
  const [singleCarItem, setFetchedData] = useState([]);
  const isLoggedIn=!!localStorage.token ;
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/Vehicle/${slug}`);
        setFetchedData(response.data); 
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.model}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.image} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.model}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.pricePerDay}.00 / Day
                  </h6>

                  
                </div>

                <p className="section__description">
                  {singleCarItem.brand}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.type}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.gear}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.year}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.color}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.capacity}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col> 
          </Row>
        </Container>
        <Button
  variant="contained"
  style={{ marginLeft: "50%", marginTop: "2%" }}
  onClick={() => {
    if (isLoggedIn) { 
      
    } else { 
      navigate("/login");  
    }
  }}
>Rent   </Button>
        </section>
    </Helmet>
  );
};

export default CarDetails;
