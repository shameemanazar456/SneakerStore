import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Login.css'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
      <Row xs={1} md={2} >
        <Col style={{backgroundColor:'white'}}>
          <div className='container'>
          <div id='login'>
            <div>
              <div className='d-flex justify-content-center align-items-center'>
                <img src="https://najas06.github.io/RARE-KICKS/logo.png" alt="" width={150} height={150}/>
              </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faUser} className='me-2'/>
          <input type="text" className='input' placeholder='Username'  />
          </div>
          <div className='d-flex justify-content-center align-items-center' >
          <FontAwesomeIcon icon={faEnvelope} className='me-2' />
          <input type="text" className='input' placeholder='email@gmail.com' />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faLock} className='me-2' />
          <input type="text" className='input' placeholder='password' />
          </div>
            <div className='d-flex justify-content-between mt-2'>
              <button className='btn btn-danger'>cancel</button>
              <button className='btn btn-success'>Sign up</button>
            </div>
              <p className='mt-5 text-center'>Already a user?<span><Link to={'/login'} className='ms-1' href="">Sign in</Link></span></p>
          </div>
        </div>
          </div>
        </Col>
        <Col style={{ height:'100vh' }} >
          <div className='d-flex justify-content-center align-items-center'>
          <img src="https://najas06.github.io/RARE-KICKS/shoe2.png" alt="" style={{width:'100%',height:'100vh',padding:'0',margin:'0'}}/>
          </div>
        </Col>
      </Row>
    </>
)}

export default Register