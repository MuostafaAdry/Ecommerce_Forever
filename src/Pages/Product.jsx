import React, { useEffect, useState } from "react";
import Productclass from "../PagesCss/Product/Product.module.css";
import { useParams } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import { Col, Container, Row } from "react-bootstrap";
import star_icon from ".././assets/frontend_assets/star_icon.png";
import RelateProdusts from "../Components/product/RelateProdusts/RelateProdusts";
import { useDispatch } from "react-redux";
import { StoreProducts } from "../redux/productsitems/productSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Product = () => {
  const { ProductId } = useParams();
  console.log(ProductId);
  const [ProductData, setProductData] = useState("");
  const [image, setimage] = useState("");
  const featchDate = async () => {
    products.map((item) => {
      if (item._id === ProductId) {
        setProductData(item);
        console.log(item);
        setimage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    featchDate();
  }, [ProductId, products]);
  // handel Size
  const [Size, setSize] = useState();

  const handelSize = (item) => {
    setSize(item);
  };

  const dispatch = useDispatch();
  const handelAddToCart = (ProductData, image) => {
    if (!Size) {
      toast.success("Select Size frist");
    } else {
      const Cartimage = image;
      const name = ProductData.name;
      const price = ProductData.price;
      const id = ProductData._id;
      const total = Counter * ProductData.price;
      const CartProducts = { Size, Cartimage, total, name, price, id };
      dispatch(StoreProducts(CartProducts));
      toast.success("Added");
    }
  };
  const [Counter, setCounter] = useState(1);

  const handeldecremeint = () => {
    if (Counter <= 1) {
    } else {
      setCounter(Counter - 1);
    }
  };

  return ProductData ? (
    <div>
      <Container className={Productclass.Produstmain}>
        {ProductData.image.map((item, index) => {
          return (
            <Row key={index}>
              <Col lg={5} md={6} sm={12}>
                <div className={Productclass.img_container}>
                  <img className={Productclass.img} src={image} alt="" />
                </div>
              </Col>
              <Col
                lg={7}
                md={6}
                sm={12}
                className={Productclass.product_proprits}
              >
                <h1 className={Productclass.product_name}>
                  {ProductData.name}
                </h1>
                <div className={Productclass.product_stars}>
                  <img src={star_icon} alt="" className={Productclass.star} />
                  <img src={star_icon} alt="" className={Productclass.star} />
                  <img src={star_icon} alt="" className={Productclass.star} />
                  <img src={star_icon} alt="" className={Productclass.star} />
                  <img src={star_icon} alt="" className={Productclass.star} />
                </div>
                <h1 className={Productclass.price}>{ProductData.price}$</h1>
                <p className={Productclass.description}>
                  {ProductData.description}
                </p>
                <p>Selesct size</p>

                {ProductData.sizes.map((item, index) => {
                  return (
                    <div key={index} className={Productclass.sizes}>
                      <h1
                        className={Productclass.size}
                        onClick={() => handelSize(item)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                })}

                <div className={Productclass.Counter_container}>
                  <div className={Productclass.Counters}>
                    <button
                      className={Productclass.Counters_btn}
                      onClick={() => handeldecremeint()}
                    >
                      -
                    </button>
                    <h3>{Counter}</h3>
                    <button
                    
                      className={Productclass.Counters_btn}
                      onClick={() => setCounter(Counter + 1)}
                    >
                      +
                    </button>
                  </div>

                 
                </div>

                <button
                  className={Productclass.addbtn}
                  onClick={() => handelAddToCart(ProductData, image)}
                >
                  ADD TO CART
                </button>
                <hr className={Productclass.hr} />
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </Col>
            </Row>
          );
        })}
      </Container>
      {/* Describtion & review section */}
      <div className={Productclass.Describtion_review}>
        <Container>
          <p className={Productclass.Description}>Description</p>
          <p className={Productclass.Reviews}>Reviews (122)</p>

          <div className={Productclass.Describtionandreview_titles}>
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
          <Row>
            <RelateProdusts />
          </Row>
        </Container>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Product;
