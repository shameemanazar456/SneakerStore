import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Login.css'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAllUserApi } from '../services/allAPI'
import { Link } from 'react-router-dom'
const Login = () => {
  const [signIn, setSignIn]=useState([])
    const [loginDetails,setLoginDetails] = useState({
        username:"",
        password:""
    })
    const handleSubmit=async()=>{
      try {
        const response=await getAllUserApi()
        setSignIn(response.data)
          const existingUser = response.data.find(item=>item.username==loginDetails.username)
          const existingPass= response.data.find(item=>item.password==loginDetails.password)
          if(existingUser)
          {
            if(existingPass)
              {
                alert('Login successfull!')
              }
            else
              {
                alert('Invalid password!')
              }
          }
          else
          {
            alert('Invalid username!')
          }
      } catch (error) {
        console.log(error)
      }
    }
    console.log(signIn);
  return (
    <>
      <Row xs={1} md={2} >
        <Col style={{ height:'100vh' }} >
          <div className='d-flex justify-content-center align-items-center'>
          <img src="https://najas06.github.io/RARE-KICKS/shoe3.gif" alt="" style={{width:'100%',height:'100vh',padding:'0',margin:'0'}}/>
          </div>
        </Col>
        <Col style={{backgroundColor:'white'}}>
          <div className='container'>
          <div id='login'>
            <div>
              <div className='d-flex justify-content-center align-items-center'>
                <img src="https://najas06.github.io/RARE-KICKS/logo.png" alt="" width={150} height={150}/>
              </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faUser} className='me-2'/>
          <input type="text" className='input' placeholder='Username' onChange={((e)=> setLoginDetails({...loginDetails,username:e.target.value}))} />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faLock} className='me-2' />
          <input type="text" className='input' placeholder='password' onChange={((e)=>setLoginDetails({...loginDetails,password:e.target.value}))} />
          </div>
            <div className='d-flex justify-content-between mt-2'>
              <button className='btn btn-success' onClick={handleSubmit}>Sign in</button>
            </div>
              <Link to={'/register'} style={{textDecoration:'none', color:'black'}}><p className='mt-5 text-center'>New here?<span><a className='ms-1' href="">Sign up</a></span></p></Link>
          </div>
        </div>
          </div>
        </Col>
      </Row>
    </>
)}

export default Login
