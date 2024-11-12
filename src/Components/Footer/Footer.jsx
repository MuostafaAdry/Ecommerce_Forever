import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footerclass from "./Footer.module.css";
import logo from '../../assets/frontend_assets/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={Footerclass.footer_main}>
      <Container>
        <Row>
          <Col lg={6} md={3} sm={12}>
          <Link to='/'> 
          
          <img src={logo} alt="" />
          </Link>
           
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>

          <Col lg={3} md={3} sm={12} className={Footerclass.links_container}>
            <h1 className={Footerclass.links_header}>COMPANY</h1>
            <Link className={Footerclass.footer_link}>Home</Link>
            <Link className={Footerclass.footer_link}>About Us</Link>
            <Link className={Footerclass.footer_link}>Delivery</Link>
            <Link className={Footerclass.footer_link}>Privacy policy</Link>
          </Col>
          <Col lg={3} md={3} sm={12} className={Footerclass.links_container}>
            <h1 className={Footerclass.links_header}>GET IN TOUCH</h1>
            <p>+201555047152</p>
            <p>mostafaelsheref256@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
