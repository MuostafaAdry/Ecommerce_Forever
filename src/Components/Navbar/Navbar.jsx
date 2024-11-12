import React from "react";
import Navbarclass from "./navbar.module.css";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/frontend_assets/logo.png";
import search_icon from "../../assets/frontend_assets/search_icon.png";
import profile_icon from "../../assets/frontend_assets/profile_icon.png";
import cart_icon from "../../assets/frontend_assets/cart_icon.png";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Navigation = ({ setShowSearch ,ShowSearch}) => {
  const NavCounter = useSelector((state) => state.productsitems.CartProducts);
  const counterNumber = NavCounter.length;
  const navigate = useNavigate();
 
  const handelCarticon = () => {
    if (counterNumber > 0) {
      navigate("/Cart");
     
    } else {
      toast.success("Your Cart is empty");
    }
  };
  return (
    <div className={Navbarclass.Navbar}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to="/">
            <img className={Navbarclass.logo} src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className={Navbarclass.Nav_link} to="/">
                Home
              </Link>
              <Link className={Navbarclass.Nav_link} to="/Collections">
                Collections
              </Link>

              <Link className={Navbarclass.Nav_link} to="/About">
                About
              </Link>
              <Link className={Navbarclass.Nav_link} to="/Contact">
                Contact
              </Link>
            </Nav>

            <div className={Navbarclass.Nav_right}>
              <NavDropdown
                title={
                  <img
                    className={Navbarclass.Nav_icon}
                    src={profile_icon}
                    alt=""
                  />
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                <NavDropdown.Item to="#">
                  <Link to="/Login">Login</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <p className={Navbarclass.counterNumber} onClick={handelCarticon}>
                {counterNumber ? (
                  <div className="">{counterNumber}</div>
                ) : (
                  <div className=""></div>
                )}
              </p>
              <img
                className={Navbarclass.search_icon}
                src={search_icon}
                alt=""
                onClick={() => setShowSearch(!ShowSearch)}
              />
            </div>
          </Navbar.Collapse>

          <img
            className={Navbarclass.cart_icon}
            onClick={handelCarticon}
            src={cart_icon}
            alt=""
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
