import React, { useRef,useState  } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

 
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.token);
  const menuRef = useRef(null);

  const filteredNavLinks = navLinks.filter(link => {
    return !isLoggedIn || link.path !== "/contact";
  });

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active")
  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +212 688167585
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
  {isLoggedIn ? (
    
    <button
    onClick={() => {
      localStorage.removeItem("token");
      setIsLoggedIn(false); 
    }}
    className="d-flex align-items-center gap-1"
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'inherit',
      padding: 0,
    }}
  >
    <i className="ri-user-line"></i> Logout
  </button>
  

  ) : (
    
    <>
      <Link to="/login" className="d-flex align-items-center gap-1">
        <i className="ri-login-circle-line"></i> Login
      </Link>

      <Link to="/register" className="d-flex align-items-center gap-1">
        <i className="ri-user-line"></i> Register
      </Link>
    </>
  )}
</div>


            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Bangladesh</h4>
                  <h6>Sylhet City, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
             
                {filteredNavLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div> 
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
