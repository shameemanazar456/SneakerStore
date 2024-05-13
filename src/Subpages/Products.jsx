import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCartItemApi, getCartDetailsApi, getProductsApi } from "../APIcalls/AllAPI";
import { useNavigate } from "react-router-dom";
// import { getProductsApi } from "../Apis/allApi";

const Products = ({uid, isLoggedin}) => {
  const [product, setProduct] = useState([]);
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
       
      const response = await getCartDetailsApi(uid)
      console.log(response.data);
      setUserData(response.data)

  
      const res = await getProductsApi();
      console.log(res.data);
      setProduct(res.data); // Assuming response is an array of products
    };
    getProduct();
  }, []);
  console.log(product);

  const addtoWishlist= async(id)=>{

   if(isLoggedin) {console.log('inside wishlist');
    let selectedItem = product.find((item)=>item.itemID == id)
    console.log(selectedItem);
    let newUserData = userData
    console.log(userData);
   
    if(newUserData.wishlist.find((item)=>item.itemID == id)){
        alert('Item Already in Wishlist ')
    }
    else{
        newUserData.wishlist.push(selectedItem)
    }
    setUserData({})
    setUserData(newUserData)
    console.log(userData);
    await deleteCartItemApi(newUserData.id, newUserData)
  }
    else{
      alert('Please Login')
    }

    

}
const addtoCart= async(id)=>{
  console.log('inside cart');
  let selectedItem = product.find((item)=>item.itemID == id)
  console.log(selectedItem);
  let newUserData = userData
 
  if(newUserData.Cart.find((item)=>item.itemID == id)){
      alert('Item Already in Cart ')
  }
  else{
      
      newUserData.Cart.push(selectedItem)
  }
  setUserData({})
  setUserData(newUserData)
  console.log(userData);
  await deleteCartItemApi(newUserData.id, newUserData)
}
  

  const displayedProducts = product.slice(5, 13);
  const getProduct =(pid)=>{
    navigate('/')
  }

  return (
    <>
      <div
        className="product_details"
        style={{ marginTop: "40px", textAlign: "center" }}
      >
        <h2>
          <span className="p1">Our </span>
          <span className="p2">Products</span>
        </h2>
        <Row className="ms-5 me-3">
          {displayedProducts.map((item, index) => (
            <Col key={index} className="mb-5 mt-4" sm={12} md={6} lg={4} xl={3}>
              <Card className="rounded w-100 shadow-lg">
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "200px" }}
                  onClick={()=>getProduct(item.id)}
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
                    <Button onClick={()=>addtoWishlist(item.itemID)} variant="outline-danger" className="rounded">
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "#e90101" }}
                      />{" "}
                    </Button>
                    <Button onClick={()=>addtoCart(item.itemID)} variant="outline-warning" className="rounded">
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        style={{ color: "#FFD43B" }}
                      />
                    </Button>
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

export default Products;
