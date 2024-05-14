import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCartItemApi, getCartDetailsApi, getProductsApi } from "../APIcalls/AllAPI";
import { useNavigate } from "react-router-dom";

const Pboys = ({uid, isLoggedin, setProductViewID}) => {
  const [product, setProduct] = useState([]);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()

  const addtoWishlist= async(id)=>{

    if(isLoggedin) {
      const response = await getCartDetailsApi(uid)
      console.log(response.data);
      setUserData(response.data)
      console.log(userData);
      
      console.log('inside wishlist');
     let selectedItem = product.find((item)=>item.itemID == id)
     console.log(selectedItem);
     let newUserData = userData
     console.log(userData);
    
     if(newUserData.wishlist.find((item)=>item.itemID == id)){
         alert('Item Already in Wishlist ')
     }
     else{
         newUserData.wishlist.push(selectedItem)
         alert('Item Added to Wishlist')

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
 if(isLoggedin){
  const response = await getCartDetailsApi(uid)
 console.log(response.data);
 setUserData(response.data)
 console.log(userData);
   console.log('inside cart');
   let selectedItem = product.find((item)=>item.itemID == id)
   console.log(selectedItem);
   let newUserData = response.data
  
   if(newUserData.Cart.find((item)=>item.itemID == id)){
       alert('Item Already in Cart ')
   }
   else{
       
       newUserData.Cart.push(selectedItem)
       alert('Item Added to Cart')

   }
   setUserData({})
   setUserData(newUserData)
   console.log(userData);
   await deleteCartItemApi(newUserData.id, newUserData)}
   else{
     alert('Please Login')
     navigate('/login')
   }
 }
//Function to view product details
 /* const ViewProduct =(id)=>
  {
    setProductViewID(id)
    navigate('/Details')
  } */
   


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
               // onClick={()=>ViewProduct(item.itemID)}
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

export default Pboys;
