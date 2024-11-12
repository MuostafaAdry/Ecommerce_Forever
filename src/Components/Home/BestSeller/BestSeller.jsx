import React, { useEffect, useState } from "react";
import BsellerClass from "./BestSeller.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BestSeller = ({ products ,text1,text2}) => {
  const [Bestseler, setBestseler] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestseler(bestProduct);
  }, []);

  return (
    <div>
      <Container>
        <div className={BsellerClass.title_div}>
          <h1 className={BsellerClass.title_text}>
            {" "}
            <span className={BsellerClass.span}>{text1}</span>{text2}
          </h1>
          <p className={BsellerClass.title_line}></p>
        </div>
        <p className={BsellerClass.lorme}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
        <Row>
          {Bestseler.map((item, index) => {
            return (
              <Col key={index} lg={2} md={3} sm={6}>
                <div className={BsellerClass.img_container}>
                  <Link to={`/product/${item._id}`}>
                    <img
                      className={BsellerClass.BSimg}
                      src={item.image}
                      alt=""
                    />
                  </Link>
                </div>

                <p>{item.name}</p>
                <p>{item.price}$</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BestSeller;
