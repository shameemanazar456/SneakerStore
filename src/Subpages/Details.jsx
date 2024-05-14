import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faHeart ,faCartShopping, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Products from "./Products";
import { getProductDetailsApi } from "../APIcalls/AllAPI";
import { Link } from "react-router-dom";



const Details = ({uid, isLoggedin, productViewID}) => {
const [details, setDetails] = useState([]);
const [displayedDetails, setDispaly] = useState([]);

useEffect(() => {
const getDetails = async () => {
const res = await getProductDetailsApi(productViewID);
setDetails(res.data);
console.log(details);
setDispaly(details.find((item)=>item.itemID == productViewID))
};
getDetails();
}, []);
 console.log(displayedDetails);
 console.log(productViewID);

 


 
  return (
    <>



<div className="row d-flex " style={{alignItems:'center',marginLeft:'300px'}} >

      {
          <div  className="mb-5 mt-4" sm={12} md={6} lg={4} xl={3}>
            
      <div className="col-md-5 mt-5 me-5 border p-4 border shadow-lg d-flex w-75" >
      <div><img src={displayedDetails.img} style={{height:'250px',marginTop:'250px',width:'300px'}}></img></div>
      <div class="p-5 ms-5">
        <h1>{displayedDetails.name}</h1>
        <h2><span  className='text-danger'>{displayedDetails.price}₹</span></h2>
        <h3>{displayedDetails.name}</h3>
          <h4>Product Details</h4>
          <ul style={{listStyle:'none'}} className='p-0' >
            <li>Manufactuer:Addidas</li>
            <li>Material:Leather </li>
            <li>Water resistance level:3 </li>
            <li>Weight: 500gm</li>
          </ul>
       <div className="d-flex justify-content-between  m-5">
          <button className='btn btn-outline-dark  ' ><FontAwesomeIcon icon={faHeart} style={{color: "#f60938",}}className='' /></button>
          <button className='btn btn-outline-dark'><FontAwesomeIcon className="text-danger" icon={faCartShopping} /></button>
          <Link to={'/'} style={{textDecoration:'none'}}><button className='btn btn-outline-dark'><FontAwesomeIcon className="text-danger" icon={faArrowLeft} /></button></Link>
       </div>
      </div>
      </div>

</div>
}
    </div>
 
    </>
  )
}

export default Details;


      

   
