 import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage, 
} from 'mdb-react-ui-kit';
import axios from "axios";
import React, {useState,useEffect } from "react";
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

export default function ProfilePage() {
 
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
  
  const [singleuser, setFetcheduser] = useState([1]);  
  const [Rentals, setRentals] = useState([]);  

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
  },[]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/RentalsByUsername/${localStorage.username}`);
        setRentals(response.data);
        console.log(response.data.length);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    } 
    fetchData();
  },[]); 
  const cancelRental = async (rentalId) => {
    try {
      await axios.delete(`http://localhost:8080/Rental/${rentalId}`); 
      toast.success('Renta Removed go make an other Rental', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } catch (err) {
      console.error("Error canceling rental:", err);
      toast.error('Error canceling rental: ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };
 
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5"> 
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <br />
                <p className="text-muted mb-1">{singleuser.name}</p> 
                 
              </MDBCardBody>
            </MDBCard> 
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{singleuser.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{singleuser.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                 
                 
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{singleuser.number}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3"> 
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{singleuser.adress}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody> 
            </MDBCard> 

            
            {Rentals.length > 0 && (
              <MDBCol lg="4">
                <MDBCard className="mb-4" style={{ width:'110%' }}>
                  <MDBCardBody className="text-center">
                    <p>Active Rental</p>
                    
                    <MDBCardImage
                      src={Rentals[0].vehicle.image}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid
                    />  
                    
                    <table>
  <tr>
    <td style={{ paddingRight: '25px' }}>
      <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i>
    </td>
    <td>{Rentals[0].vehicle.model}</td>
  </tr>
  <tr>
    <td style={{ paddingRight: '25px' }}>
      <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>
    </td>
    <td>
      Start Rent : {formatDate(Rentals[0].startDate)}
    </td>
  </tr>
  <tr>
    <td style={{ paddingRight: '25px' }}>
      <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>
    </td>
    <td>
      End Rent : {formatDate(Rentals[0].endDate)}
    </td>
  </tr>
  <tr>
    <td> <i class="ri-sun-fill"></i>Days rented :</td>
    <td>{Rentals[0].totalCost / Rentals[0].vehicle.pricePerDay }   days </td>
  </tr>
  <tr>
    <td style={{ paddingRight: '30px' }}> <i class="ri-price-tag-fill"></i>Price Per Day</td>
    <td>{Rentals[0].vehicle.pricePerDay} Dhs </td>
  </tr>
  <tr>
    <td style={{ paddingRight: '30px' }}><i class="ri-bank-card-line"></i>Total</td>
    <td>{Rentals[0].totalCost} Dhs </td>
  </tr>
</table> 
<Button variant="outlined" color="error" style={{marginTop:'20px' }} onClick={() => cancelRental(Rentals[0].id)} >Cancel Rental</Button>
                  </MDBCardBody>
                  
                </MDBCard>
              </MDBCol>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}