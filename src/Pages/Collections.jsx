import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Collectionclass from "../PagesCss/Collection/Collection.module.css";
import dropdown_img from "../assets/frontend_assets/dropdown_icon.png";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "../Components/Home/ProductItem/ProductItem";

const Collections = ({ SearchValue, ShowSearch }) => {
  const [Showfilter, setShowfilter] = useState(true);
  const [FilterProducts, setFilterProducts] = useState([]);
  const handeShowFilter = () => {
    setShowfilter(!Showfilter);
  };

  // ==========
  // for category filter
  const [Category, setCategory] = useState([]);
  const toggelCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  // for type filter
  const [subCategory, setsubCategory] = useState([]);
  const toggelsubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };
  // filter logic
  const applyFilter = () => {
    let copyProducts = products.slice();

    if (SearchValue && ShowSearch) {
      copyProducts = copyProducts.filter((item) =>
        item.name.toLowerCase().includes(SearchValue.toLowerCase())
      );
    }
    if (Category.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        Category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      copyProducts = copyProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(copyProducts);
  };
  //  SORT PRICE
  const [sortType, setsortType] = useState("relevant");
  const SortPrice = () => {
    let fpCopy = FilterProducts.slice();

    switch (sortType) {
      case "Low-High":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "High-Low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [Category, subCategory, SearchValue, ShowSearch]);
  useEffect(() => {
    SortPrice();
  }, [sortType]);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <p className={Collectionclass.filter_title}>
              FILTERS
              <img
                className={Collectionclass.filter_icon}
                onClick={handeShowFilter}
                src={dropdown_img}
                alt=""
              />
            </p>
            {Showfilter ? (
              <>
                {" "}
                <div className={Collectionclass.filter_container1}>
                  <h5>CATEGORY</h5>
                  <p className={Collectionclass.check_value}>
                    <input
                      className={Collectionclass.check_input}
                      type="checkbox"
                      value={"Men"}
                      onChange={toggelCategory}
                    />
                    Men
                  </p>
                  <p>
                    <input
                      className={Collectionclass.check_input}
                      type="checkbox"
                      value={"Women"}
                      onChange={toggelCategory}
                    />
                    Women
                  </p>
                  <p>
                    <input
                      className={Collectionclass.check_input}
                      type="checkbox"
                      value={"Kids"}
                      onChange={toggelCategory}
                    />
                    Kids
                  </p>
                </div>
                <div className={Collectionclass.filter_container2}>
                  <p>Type</p>

                  <p>
                    <input
                      className={Collectionclass.check_input}
                      type="checkbox"
                      value={"Topwear"}
                      onChange={toggelsubCategory}
                    />
                    Topwear
                  </p>
                  <p>
                    <input
                      className={Collectionclass.check_input}
                      type="checkbox"
                      value={"Bottomwear"}
                      onChange={toggelsubCategory}
                    />
                    Bottomwear
                  </p>
                  <p>
                    <input
                      className={Collectionclass.check_input}
                      type="checkbox"
                      value={"Winterwear"}
                      onChange={toggelsubCategory}
                    />
                    Winterwear
                  </p>
                </div>
              </>
            ) : (
              ""
            )}
          </Col>
          <Col lg={9} md={9} sm={12}>
            <div className={Collectionclass.Center_colection}>
              <div className={Collectionclass.header_line}>
                <h1 className={Collectionclass.span}>
                  All{" "}
                  <span className={Collectionclass.collectio_title}>
                    Collections
                  </span>{" "}
                </h1>
                <p className={Collectionclass.line}></p>
              </div>

              <div>
                <select
                  onChange={(e) => setsortType(e.target.value)}
                  className={Collectionclass.select}
                >
                  <option value="relevant">Sort By:Relevant</option>
                  <option value="Low-High">Sort By:Low To High</option>
                  <option value="High-Low">Sort By: High To Low</option>
                </select>
              </div>
            </div>
            <Container>
              <Row>
                {FilterProducts.map((item, index) => {
                  return (
                    <Col key={index} lg={3} md={4} sm={12}>
                      <ProductItem
                        className={"items"}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Collections;
