import React, {useState, useEffect } from "react";

import axios from "axios";  
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom"; 
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const CarDetails = () => {
  const { slug } = useParams();
const navigate = useNavigate();
const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [singleCarItem, setFetchedData] = useState([]);
  const [singleuser, setFetcheduser] = useState([]); 
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
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/user/username/${localStorage.username}`);
        setFetcheduser(response.data);  
        
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    } 
    fetchData();
  }, [ ]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]); 

async function rent(){  
   if (selectedDateRange[0]==null || selectedDateRange[1]==null){ 
    console.log('datetime range not selected');
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">
        datetime range not selected
  </Alert>
    </Stack>  
   }
    else{
     
   console.log(selectedDateRange)
    const data = 
   {
    singleuser,
    singleCarItem,
    startDate: `${selectedDateRange[0].$y}-${selectedDateRange[0].$M}-${selectedDateRange[0].$D}` ,
    endDate: `${selectedDateRange[1].$y}-${selectedDateRange[1].$M}-${selectedDateRange[1].$D}`,
    totalCost: 0.0,
    status: "False",
   };

   const config = {
    headers: {
      Authorization: `Bearer<${localStorage.token}>`,
    },
   }; 
   console.log(data);
   axios.post('http://localhost:8080/Rental',data,config)
    .then((response) => {
      console.log('Response:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  } 
} 
    
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DemoContainer components={['DateRangePicker']}>
    <DateRangePicker
      localeText={{ start: 'start-Date', end: 'end-Date' }}
      onChange={(newDateRange) => setSelectedDateRange(newDateRange)}
    />
  </DemoContainer>
</LocalizationProvider>
                
              </div>
            </Col> 
          </Row>
        </Container>
        <Button
  variant="contained"
  style={{ marginLeft: "50%", marginTop: "2%" }}
  onClick={() => {
    if (isLoggedIn) { 

      rent();
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
