import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { deleteCartItemApi, getCartDetailsApi } from '../APIcalls/AllAPI';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Cart({uid, isLoggedin}) {
    const [show, setShow] = useState(false);
    const [cartData, setCartData]=useState([])
    const [userData, setUserData]=useState({})
    const [total, setTotal]=useState('0')
    const navigate = useNavigate()

    const[deleteItemStatus, setdeleteItemStatus] = useState("false")
    const[qty, setQty] = useState(("1"))

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);   
  const getCartDetails = async(uid)=>{
    const response = await getCartDetailsApi(uid)
    console.log(response);
    setUserData(response.data)
    console.log(userData);

        setCartData(userData.Cart)

    console.log(userData);

    console.log(cartData);

      if(cartData){ if(cartData?.length>1) {  
        let subtot = cartData.map((item)=>Number(item.OfferPrice)*Number(qty))
            setTotal( subtot.reduce((a,b)=>Number( a)+Number(b)))
        } 
    else{
        console.log(cartData[0].OfferPrice);
        setTotal(Number(cartData[0].OfferPrice)*Number(qty))
        console.log(total);

    }  
    console.log(total);

    console.log(cartData);}
  }

  /* function to delete item from cart */
  const handleDelete = async(id)=>{
    console.log('item delet');
    console.log(id);
    let selectedItem = cartData.filter((item)=>item.itemID!=id)
    let newUserdata = userData
    newUserdata.Cart = selectedItem
    setUserData({})
    setUserData(newUserdata)
    //console.log(userData);
    let reqBody=userData;
    await deleteCartItemApi(newUserdata.id, reqBody)
    setdeleteItemStatus(true)
   // getCartDetails(uid)

    }
/* Function to move item to the cart */
  
const handleMove = async (id)=>{
    let selectedItem = cartData.find((item)=>item.itemID == id)
    let newUserData = userData
       if(newUserData.wishlist.find((item)=>item.itemID == id)){
        alert('Item Already in Wishlist ')
    }
    else{
        newUserData.wishlist.push(selectedItem)
    }
    setUserData({})
    setUserData(newUserData)
  //  console.log(userData);
    handleDelete(id);
    

}
const handleDropDown=async(event, itid)=>{
  console.log('inside dropdown')
}

 const handleCheckout = async ()=>{
  let newUserdata = userData
    newUserdata.Cart = []
    setUserData({})
    setUserData(newUserdata)
    console.log(userData);
    let reqBody=userData;
    await deleteCartItemApi(newUserdata.id, reqBody)
    setdeleteItemStatus(true)
    getCartDetails(uid)
    alert('Order placed successfully')
    navigate('/')

 }

  useEffect(()=>{if(isLoggedin){
    getCartDetails(uid)
    setdeleteItemStatus(false)}
    else{
      alert('Please Login')
      navigate('/login')
    }
  },[cartData, deleteItemStatus, total, , isLoggedin])

  return (
    <section id='Cart'>
        {isLoggedin?
            <div id='cart' className='d-flex align-items-center justify-content-center flex-column ' style={{padding:'150px'}}>
    
         { cartData?.length>0 ?
                    
         <div className='d-flex justify-content-evenly align-items-center  flex-column'>
              <div className='border rounded d-flex justify-content-evenly align-items-center  flex-colmn col-md-6' style={{position:'fixed',marginTop:'70px',top:'0', bottom:'0', width:'50%', backgroundColor:'white',  height:'150px', zIndex:'1'}}>
             
                    <div className='align-items-center p-3'>
                        <h6 className='text-center'>You Have {cartData.length} Items in Your Cart </h6>
                        <h3 className='text-center text-warning'>Total : $ {total}</h3>
        
                    </div>
                    
        
                    <button onClick={handleCheckout} className='btn btn-success m-2 p-1  ' style={{height:'60px'}}>Check Out</button>
              </div>
              {cartData?.map((item)=>(
                <div className='d-flex align-items-center justify-content-center flex-column  mt-5 p-4 shadow border  rounded col-md-6  ' style={{width:'70vh'}}>
              <div className='d-flex'>
                   <div className=''> 
                     <img src={item?.img} alt="" style={{height:'100px'}} />
                   
                      <Dropdown className='my-2' onChange={()=>handleDropDown(item.itemId)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Qty 1
                  </Dropdown.Toggle>

            
                  <Dropdown.Menu>
                   <button onClick={()=>handleDropDown(1, item.i)}>  <Dropdown.Item >1</Dropdown.Item></button>
                   
            
                  </Dropdown.Menu>
                </Dropdown> 
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Enter Quantity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input className='form-control rounded ' type='text'></input>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Apply
                      </Button>
                    </Modal.Footer>
                  </Modal>
                    </div>
                    <div className='m-3'>
                        <h4>{item.name}   </h4>
                        <h5><strike className='me-3 text-secondary' >₹ {item.price}</strike>₹ {item.OfferPrice} <span className='text-success ms-4'>{item.offer}% offer</span> </h5>
                        <p>Delivery in 2 Days</p>       
                         </div>
              </div>
                     <div className='d-flex ' >
                        <button className='btn btn-warning me-5 mt-3 ' onClick={()=>handleMove(item.itemID)}> Move to WishList</button>
                        <button className='btn  btn-danger mt-3 ' onClick={()=>handleDelete(item.itemID)}>Delete</button>
                     </div>
        
        
              </div>))}
         </div>:
         <div className='border rounded d-flex justify-content-evenly align-items-center flex-column col-md-6' style={{width:'250px', height:'150px'}}>
         <h6 className='text-center text-warning'>You Cart is Empty...</h6>
<Link style={{textDecoration:'none'}} to={'/'}>
           <button className='btn btn-success'>Shop Now</button>
  
</Link>    
    
     </div>}
          
        </div>:

        <div className='text-center text-warning m-5 p-5 fs-1'>Please Login....</div>}

    </section>
  )
}

export default Cart
