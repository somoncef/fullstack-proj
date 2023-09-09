
import { Container, Row, Col } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";  
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
 


 
const CarListing = () => {
  const [fetchedData, setFetchedData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/VehiclesNotRented");
        setFetchedData(response.data); 
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);



  
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {fetchedData.map((item) => (
              
              <CarItem item={item} key={item.id} />
               
            ))}
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
