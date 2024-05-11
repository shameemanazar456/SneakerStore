import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProductsApi } from "../APIcalls/AllAPI";
import { Link } from "react-router-dom";
import Details from "./Details";

const Pboys = ({uid, isLoggedin}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const res = await getProductsApi();
      setProduct(res.data); // Assuming response is an array of products
    };
    getProduct();
  }, []);
  console.log(product);

  const displayedProducts = product.slice(0, 9);
  console.log(displayedProducts);

  return (
    <>
      <div className="product_details" style={{ textAlign: "center" }}>
        <Row className="ms-5 me-3">
          {displayedProducts.map((item, index) => (
            <Col key={index} className="mb-5 mt-4" sm={12} md={6} lg={4} xl={3}>
              <Card className="rounded w-100 shadow-lg">
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title className="itemName">{item.name}</Card.Title>
                  <Card.Text>
                    <p>
                      <b>Offer: </b>
                      <span className="offer">{item.offer}</span>%
                    </p>
                    <p>
                      <b> Price:</b> ₹{" "}
                      <span className="price">{item.price}</span>
                    </p>
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button variant="outline-danger" className="rounded">
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "#e90101" }}
                      />{" "}
                    </Button>
                    <Button variant="outline-warning" className="rounded">
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        style={{ color: "#FFD43B" }}
                      />
                    </Button>
 {/*--------------------------modified---------------------* */}
                
                        <Link to={'/details'}>
                            <Button variant="outline-info" className="rounded" >
                              Know More 
                            </Button>
                        </Link>
             
 {/*--------------------------modified---------------------* */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Pboys;
