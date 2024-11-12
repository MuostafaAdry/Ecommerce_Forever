import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroClasss from "./hero.module.css";
import { Link } from "react-router-dom";
import hero_img from '../../../assets/frontend_assets/hero_img.png'

const Hero = () => {
  return (
      <Container>
        <div className={heroClasss.main_div}>
    
        <Row>
          <Col  sm={6} md={6} lg={6} className={heroClasss.col}  >
            <div className={heroClasss.title_container}>
              <p className={heroClasss.text_line}></p>
              <p className={heroClasss.title}>our bestsellers</p>
            </div>

            <h1 className={heroClasss.header }>Latest Arrivals</h1>
            <div className={heroClasss.button_container}>
              <Link className={heroClasss.Shop_Now}>Shop Now</Link>
              <p className={heroClasss.text_line}></p>
            </div>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <img className={heroClasss.hero_img} src={hero_img} alt="" />
          </Col>
        </Row>  </div>
      </Container>
  
  );
};

export default Hero;
