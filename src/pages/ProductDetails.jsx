import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import { faHeart } from '@fortawesome/free-solid-svg-icons'




import './App.css'


function App() {

  
  
  return (
    <>
  
      <div className="row d-flex " >
      
        <div className='col-md-5 mt-5 ms-5 ps-5 border shadow-lg'>
        <Carousel fade >
      <Carousel.Item>
  
        <img src="https://m.media-amazon.com/images/I/71joWzI5UAL._SY695_.jpg"style={{width:'100%',height:'550px'}} ></img>
          
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://m.media-amazon.com/images/I/61b+yE6kGLL._SY695_.jpg"style={{width:'100%',height:'550px'}}></img>
        
      </Carousel.Item>
      <Carousel.Item>
        
        <img src="https://m.media-amazon.com/images/I/61gzlYG6CxL._SY695_.jpg" style={{width:'100%',height:'550px'}}></img>
      </Carousel.Item>
    </Carousel>
       
        
        
        </div>
      <div className="col md-2"></div>
        <div className="col-md-5 mt-5 me-5 border p-4 border shadow-lg" >
        <h1>Smashic Unisex Sneaker</h1>
        <h2><span  className='text-danger'>₹2899</span></h2>
        

        <h3>Color</h3>
        <div className='d-flex'>
          <div className='border border-2 border-secondary m-2'style={{height:'20px',width:'20px',backgroundColor:'green'}}></div>
          <div className='border border-2 border-secondary m-2'style={{height:'20px',width:'20px',backgroundColor:'grey'}}></div>
          <div className='border border-2 border-secondary m-2'style={{height:'20px',width:'20px',backgroundColor:'brown'}}></div>
        </div>


        <h4>Select Your Size</h4>
        <div className='d-flex'>
          <div className='border border-2 border-secondary m-2'style={{height:'40px',width:'40px',}}><span className='m-3 fs-4'>7</span></div>
          <div className='border border-2 border-secondary m-2'style={{height:'40px',width:'40px',}}><span className='m-3 fs-4'>8</span></div>
          <div className='border border-2 border-secondary m-2'style={{height:'40px',width:'40px',}}><span className='m-3 fs-4'>9</span></div>
          <div className='border border-2 border-secondary m-2'style={{height:'40px',width:'40px',}}><span className='m-1 fs-4'>10</span></div>
          <div className='border border-2 border-secondary m-2'style={{height:'40px',width:'40px',}}><span className='m-1 fs-4'>11</span></div>  </div>
          <div><a href="" className='text-color-secondary'style={{textDecoration:'none',color:'grey'}}>Size Guide</a></div>
         
        <div>
          <h4>Product Details</h4>
          <ul style={{listStyle:'none'}} className='p-0' >
            <li>Manufactuer: </li>
            <li>Material: </li>
            <li>Water resistance level: </li>
            <li>Weight: </li>
            <li>Units: </li>
          </ul>
        </div>
         
        <button className='btn btn-outline-dark m-2 w-25'><FontAwesomeIcon icon={faHeart} style={{color: "#f60938",}}className='pe-2' />Wishlist</button>
        <button className='btn btn-dark m-5'><FontAwesomeIcon icon={faCartShopping} />Add To Cart</button>
        </div>
      </div>
   
      
    </>
  )
}

export default App