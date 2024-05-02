import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header({isLoggedin, setIsLoggedin}) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout =()=>{
        setIsLoggedin(false)
        alert('Logout Successfully')
        navigate("/")
    }

  return (
   
    <>
      <Navbar expand="lg" className="bg-secondary px-4">
      <>
       <button className='border border-0 bg-transparent'>
            <Navbar.Brand href="#home" className='text-light'>
            <img
                  alt=""
                  src="https://png.pngtree.com/png-clipart/20230527/original/pngtree-s-logo-icon-png-image_9171884.png"
                  width="30px"
                  height="30px"
                  className="d-inline-block align-top"
                />{' '}
                
                RareKicks
            
            </Navbar.Brand>
       </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link href="" className='me-2 '> <Link to={"/"} style={{textDecoration:'none', color:'black'}}>Home</Link></Nav.Link>
            
            <NavDropdown title="Collections" id="basic-nav-dropdown" className='me-2 text-light'>
              <NavDropdown.Item href="/cart">Boys</NavDropdown.Item>
              <NavDropdown.Item href="/login">
                Girls
              </NavDropdown.Item>
              
            </NavDropdown>
            
                    <Nav.Link>
                        <button className='bg-transparent border-0'><FontAwesomeIcon icon={faHeart} style={{color: "#e70404",}} className='me-1' />Wishlist
                        </button>
                    </Nav.Link>
                
                <Nav.Link >
                
                    <Link to={'/cart'}>
                      <button className='bg-transparent border-0'><FontAwesomeIcon icon={faCartShopping} style={{color: "orange",}} className='me-1' />Cart
                      </button>
                    </Link>
                
                
            </Nav.Link>
{!isLoggedin && <Link to={'/login'} style={{textDecoration:'none'}}>
              <Nav.Link href="#link" className='ms-1'>Login</Nav.Link>
  
</Link>}
{ isLoggedin && <Link to={'/'} style={{textDecoration:'none'}}>
              <Nav.Link href="#link" className='ms-1' onClick={handleLogout}>Log Out</Nav.Link>
  
</Link>}

          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
   {/*  <Offcanvas show={show} onHide={handleClose} style={{width:'250px'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>RareKicks</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  )
}

export default Header
