import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faCartPlus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCartItemApi, getCartDetailsApi, getProductsApi } from "../APIcalls/AllAPI";
import { Link, useNavigate } from "react-router-dom";
// import { getProductsApi } from "../Apis/allApi";

const Wishlist = ({uid, isLoggedin}) => {
  const [wishlist,setWishlist] = useState([])
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()
  useEffect(() => {
   
  if(isLoggedin){
    getProduct(uid);
   }
   else{
    alert('Please login')
    navigate("/login")
 
   } 

  }, [wishlist]);

  const getProduct = async (uid) => {
       
    const response = await getCartDetailsApi(uid)
    console.log(response.data)
    let u = response.data
    console.log(u);
    setUserData(u);
    console.log(userData);
    console.log(u.wishlist);
    setWishlist(u.wishlist)
    console.log(wishlist);
 }

  const deleteWishlist= async(id)=>{

   if(isLoggedin) {console.log('inside wishlist');
    let selectedItem = wishlist.find((item)=>item.itemID == id)
    console.log(selectedItem);
    const response = await getCartDetailsApi(uid)
    console.log(response.data)
    let u = response.data
  let newUserData = u
   let newWishlist = newUserData.wishlist.filter((item)=>item.itemID != id)
   
        newUserData.wishlist = newWishlist
    
    setUserData({})
    setUserData(newUserData)
    await deleteCartItemApi(newUserData.id, newUserData)
  }

    

}
const addtoCart= async(id)=>{
  let selectedItem = userData.wishlist.find((item)=>item.itemID == id)
  console.log(selectedItem);
  const response = await getCartDetailsApi(uid)
    console.log(response.data)
    let u = response.data
  let newUserData = u
 if(newUserData.Cart.length>0){
   if(newUserData.Cart.find((item)=>item.itemID == id)){
      alert('Item Already in Cart ')
  }
  else{
      newUserData.Cart.push(selectedItem)
      alert('Item Added to Cart')
      deleteWishlist(id)
  }}
  else{
    newUserData.Cart.push(selectedItem)
    alert('Item Added to Cart')
    deleteWishlist(id)
  }
  setUserData({})
  setUserData(newUserData)
  await deleteCartItemApi(newUserData.id, newUserData)
}
  


  return (
    <>
      <div
        className="product_details"
        style={{ marginTop: "40px", textAlign: "center" }}
      >
        <h2>
          <span className="p2">Wishlist</span>
        </h2>
        <Row className="ms-5 me-3">
          {wishlist.length > 0?
          wishlist.map((item, index) => (
            <Col key={index} className="mb-5 mt-4" sm={12} md={6} lg={4} xl={3}>
              <Card className="rounded w-100 shadow-lg">
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "200px" }}
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
                    <Button onClick={()=>deleteWishlist(item.itemID)} variant="outline-danger" className="rounded">
                    <FontAwesomeIcon icon={faTrash} style={{color: "#ec0909",}} />
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
          )):
          <div className=' rounded d-flex justify-content-evenly align-items-center flex-column col-md-6 m-5 p-5' style={{width:'100%', height:'auto'}}>
         <h2 className='text-center text-warning '>You WishList is Empty...</h2>
<Link style={{textDecoration:"none"}} to={'/'}>
           <button  className='btn btn-success'>Home</button>
  
</Link>    
    
     </div>}
        </Row>
      </div>
     
    </>
  );
};

export default Wishlist;
