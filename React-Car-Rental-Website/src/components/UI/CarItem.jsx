 
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
 import "../../styles/car-item.css"; 

const CarItem = (props) => {
  const { model, year, pricePerDay, gear , image,id ,type  } = props.item;


  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={image}  alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{model}</h4>
          <h6 className="rent__price text-center mt-">
             {pricePerDay}.00 Mad <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {type}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {gear}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {year}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${id}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
