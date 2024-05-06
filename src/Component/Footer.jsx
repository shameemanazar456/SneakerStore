import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faIndianRupee,
  faIndianRupeeSign,
  faRetweet,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const handleSubscribe = ()=>{
    alert('Thankyou for your Subscription')
  }
  return (
    <div className="bg-secondary">
      <Row>
        <Col md={3} className="p-5 ms-md-5">
          <h4 className="text-light">
            {" "}
            <img
              alt=""
              src="https://png.pngtree.com/png-clipart/20230527/original/pngtree-s-logo-icon-png-image_9171884.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            RareKicks
          </h4>
          <p className="text-light">
            India's trusted leading Fashion & Lifestyle brand with over 390+
            opulent stores across PAN India. Leading with our experience and
            expertise for 26 years and counting.{" "}
          </p>
        </Col>
        <Col md={2} className="p-5 ">
          <h4 className="text-light">Links</h4>
          <p>
            {" "}
            <a className="text-light" style={{ textDecoration: "none" }}>
              {" "}
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Home Page
              </Link>{" "}
            </a>
            <br></br>
          </p>
          <p>
            {" "}
            <a style={{ textDecoration: "none" }} className="text-light">
              <Link to={"/wishlist"}  style={{ textDecoration: "none", color: "white" }}>Wishlist</Link>
            </a>
            <br></br>
          </p>
          <p>
            {" "}
            <a style={{ textDecoration: "none" }} className="text-light">
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Cart
              </Link>
            </a>
          </p>
        </Col>
        <Col md={3} className="p-5">
          <h4 className="text-light">Our Policies</h4>
          <p className="text-light">
            <FontAwesomeIcon icon={faTruckFast} className="me-2" />
            Free Shipping Above $400
          </p>
          <p className="text-light">
            {" "}
            <FontAwesomeIcon icon={faRetweet} className="me-2" />7 Days Return
            Policy
          </p>
          <p className="text-light">
            {" "}
            <FontAwesomeIcon icon={faIndianRupeeSign} className="me-2" />
            COD Available
          </p>
        </Col>
        <Col md={3} className="pt-5 ">
          <h4>Contact Us</h4>
          <form action="" className="d-flex">
            <input
              type="text "
              placeholder="Enter Your Email ID"
              className="form-control w-75 me-3"
            />
            <button onClick={handleSubscribe} className="btn btn-warning w-50">Subscribe</button>
          </form>
          <div className="d-flex justify-content-evenly mt-4 ">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="text-light"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              className="text-light"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2xl"
              className="text-light"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              className="text-light"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
