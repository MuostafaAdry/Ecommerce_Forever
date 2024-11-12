import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cartclass from "../PagesCss/Cart/Cart.module.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { DeletProduct } from "../redux/productsitems/productSlice";

const Cart = () => {
  const Data = useSelector((state) => state.productsitems.CartProducts);

  const dispatch = useDispatch();
  const handelDelet = (item) => {
    dispatch(DeletProduct(item));
    toast.success("deteted");
  };

  return (
    <div>
      <Container>
        <div className={Cartclass.title_div}>
          <p className={Cartclass.span}>
            YOUR <span className={Cartclass.title_text}>CART</span>
          </p>
          <p className={Cartclass.title_line}></p>
        </div>
        {Data.map((item, index) => {
          return (
            <Row key={index}>
              <Col lg={6} md={3} sm={12} className={Cartclass.ProductProprites}>
                <div className={Cartclass.img_container}>
                  <img className={Cartclass.img} src={item.Cartimage} alt="" />
                </div>
                <div className={Cartclass.Price_size}>
                  <p>{item.name}</p>
                  <span className={Cartclass.Price}>${item.price} </span>
                  <span className={Cartclass.size}>{item.Size}</span>
                </div>
              </Col>
              <Col>{item.total}$</Col>
              <Col onClick={() => handelDelet(item)}>remove</Col>

              <hr />
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default Cart;
