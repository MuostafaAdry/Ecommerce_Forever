import React, { useEffect, useState } from "react";
import LCclass from "./LatesCollections.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { products } from "../../../assets/frontend_assets/assets";
import ProductItem from "../ProductItem/ProductItem";

const LatesCollections = () => {
  const [Latestprodcuts, setLatestprodcuts] = useState([]);
  useEffect(() => {
    setLatestprodcuts(products.slice(0, 10));
  },[]);
 
  return (
    <div>
      <Container>
        <div className={LCclass.title_div}>
          <h1 className={LCclass.title_text}>
            {" "}
            <span className={LCclass.span}>Latest</span>Collections
          </h1>
          <p className={LCclass.title_line}></p>
        </div>
        <p className={LCclass.lorme}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>

        <div>
          <Row>
            {Latestprodcuts.map((item,index) => {
              return (
                <Col key={index}    
                lg={3}
                md={6}
                sm={6}>
                 <ProductItem 
                 id={item._id}
                 name={item.name}
                 price={item.price}    
                 image={item.image}             
                 />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LatesCollections;
