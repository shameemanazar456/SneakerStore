import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faHeart ,faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDetailsApi } from "../APIcalls/AllAPI";
import Products from "./Products";



const Details = ({uid, isLoggedin}) => {
const [details, setDetails] = useState([]);

useEffect(() => {
const getDetails = async () => {
const res = await getDetailsApi(Products);
setDetails(res.data);
};
getDetails();
}, []);
 console.log(details);

 const displayedDetails = details.slice(0,1);
 console.log(displayedDetails);


 
  return (
    <>



<div className="row d-flex " style={{alignItems:'center',marginLeft:'300px'}} >

      {displayedDetails.map((item,index)=>(
          <div key={index} className="mb-5 mt-4" sm={12} md={6} lg={4} xl={3}>
            
      <div className="col-md-5 mt-5 me-5 border p-4 border shadow-lg d-flex w-75" >
      <div><img src={item.img} style={{height:'250px',marginTop:'250px',width:'300px'}}></img></div>
      <div class="p-5 ms-5">
        <h1>{item.name}</h1>
        <h2><span  className='text-danger'>{item.price}₹</span></h2>
        <h3>{item.name}</h3>
          <h4>Product Details</h4>
          <ul style={{listStyle:'none'}} className='p-0' >
            <li>Manufactuer: {item.manufacturer}</li>
            <li>Material:{item.material} </li>
            <li>Water resistance level:{item.water} </li>
            <li>Weight: {item.weight}</li>
            <li>Units:{item.units} </li>
          </ul>
        <button className='btn btn-outline-dark m-2 w-25'><FontAwesomeIcon icon={faHeart} style={{color: "#f60938",}}className='pe-2' />Wishlist</button>
        <button className='btn btn-dark m-5'><FontAwesomeIcon icon={faCartShopping} />Add To Cart</button>
      </div>
      </div>

</div>
))}
    </div>
 
    </>
  )
}

export default Details;


      

   