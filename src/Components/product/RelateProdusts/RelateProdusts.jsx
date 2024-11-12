import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { products } from "../../../assets/frontend_assets/assets";
import relateProductclass from "./relateProduct.module.css";
import ProductItem from "../../Home/ProductItem/ProductItem";
const RelateProdusts = () => {
  const [Related, setRelated] = useState([]);

  useEffect(() => {
    setRelated(products.slice(10,15));
  }, []);

  return (
    <div>
      <Container>
        <div className={relateProductclass.title_div}>
          <p className={relateProductclass.span}>
            Related{" "}
            <span className={relateProductclass.title_text}>Products</span>
          </p>
          <p className={relateProductclass.title_line}></p>
        </div>
        <Row className={relateProductclass.product_cart}>
          {Related.map((item, index) => {
            return (
              <Col  key={index} lg={2} md={4} sm={12}>
                <ProductItem
                  id={item._id}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default RelateProdusts;
