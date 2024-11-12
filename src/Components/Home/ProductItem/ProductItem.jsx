import React from "react";
import ProductItemclass from "./ProductItem.module.css";
import { Link } from "react-router-dom";
const ProductItem = ({ id, image, name, price }) => {
  return (
    <>
      <div className={ProductItemclass.img_container} lg={3} md={4} sm={12}>
        <Link to={`/product/${id}`}>
          <img className={ProductItemclass.product_img} src={image} alt="" />
        </Link>
      </div>
      <p>{name}</p>
      <p>{price}$</p>
    </>
  );
};

export default ProductItem;
