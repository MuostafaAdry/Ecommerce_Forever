import React from "react";
import OurPolicyclass from "./OurPolicy.module.css";
import { Col, Container, Row } from "react-bootstrap";
import exchange_icon from "../../../assets/frontend_assets/exchange_icon.png";
import quality_icon from "../../../assets/frontend_assets/quality_icon.png";
import support_img from "../../../assets/frontend_assets/support_img.png";

const OurPolicy = () => {
  return (
    <div className={OurPolicyclass.policy_main}>
      <Container>
        <Row>
          <Col lg={4} md={3} sm={12}>
            <div className={OurPolicyclass.logo_container}>
              <img
                className={OurPolicyclass.logo_img}
                src={exchange_icon}
                alt=""
              />
            </div>
            <div className={OurPolicyclass.logo_text}>
              <h3 className={OurPolicyclass.title}>Easy Exchange Policy</h3>
              <p className={OurPolicyclass.prag}>
                We offer hassle free exchange policy
              </p>
            </div>
          </Col>

          <Col lg={4} md={3} sm={12}>
            <div className={OurPolicyclass.logo_container}>
              <img
                className={OurPolicyclass.logo_img}
                src={quality_icon}
                alt=""
              />
            </div>
            <div className={OurPolicyclass.logo_text}>
              <h3 className={OurPolicyclass.title}>7 Days Return Policy</h3>
              <p className={OurPolicyclass.prag}>
                We provide 7 days free return policy
              </p>
            </div>
          </Col>

          <Col lg={4} md={3} sm={12}>
            <div className={OurPolicyclass.logo_container}>
              <img
                className={OurPolicyclass.logo_img}
                src={support_img}
                alt=""
              />
            </div>
            <div className={OurPolicyclass.logo_text}>
              <h3 className={OurPolicyclass.title}>Best Customer Support</h3>
              <p className={OurPolicyclass.prag}>
                We provide 24/7 customer support
              </p>
            </div>
          </Col>
        </Row>

        <div className={OurPolicyclass.letterBox_container}>
          <h1 className={OurPolicyclass.letterBox_header}>
            Subscribe now & get 20% off
          </h1>
          <p className={OurPolicyclass.letterBox_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div className={OurPolicyclass.textbox_container}>
            <input
              className={OurPolicyclass.letterBox_input}
              type="text"
              name="subscribe"
              placeholder="Enter your email id"
            />
            <input
              className={OurPolicyclass.letterBox_submitbtn}
              type="submit"
              value="SUBSCRIBE"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurPolicy;
