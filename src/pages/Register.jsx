import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Login.css'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { registerUserAPI } from '../services/allAPI'
import { Link, useNavigate } from 'react-router-dom'
import { addUserApi, getUserDetailsApi } from '../APIcalls/AllAPI'
const Register = () => {
    const navigate = useNavigate('')
    const [AllUser, setAllUser] =useState ([])
    const [registerData,setRegisterData] = useState({
        username:"",
        id:"",
        password:"",
        Cart:[],
        wishlist:[]
    })
    console.log(registerData);
    const handleSubmit = async()=>{

      const result = await getUserDetailsApi()
      console.log(result);
      setAllUser(result.data)
      console.log(AllUser);
      if(AllUser.find((item)=>item.id != registerData.id && item.username != registerData.username))
    {  
       AllUser.push(registerData)
      console.log(AllUser); 
      const response =  await addUserApi(registerData)
      console.log(response);
      if(response.status >= 200 || response.status<300 ){
        alert('Successfull register')
        
        navigate("/login")
      }
      else{
        alert('something Wrong')
      }}
      else{
        alert('User already exist')
      }
    }
  return (
    <>
      <Row xs={1} md={2} >
        <Col style={{backgroundColor:'white'}}>
          <div className=''>
          <div id='login'>
            <div>
              <div className='d-flex justify-content-center align-items-center'>
                <img src="https://najas06.github.io/RARE-KICKS/logo.png" alt="" width={150} height={150}/>
              </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faUser} className='me-2'/>
          <input type="text" className='input' placeholder='Username' onChange={((e)=>setRegisterData({...registerData,username:e.target.value}))} />
          </div>
          <div className='d-flex justify-content-center align-items-center' >
          <FontAwesomeIcon icon={faEnvelope} className='me-2' />
          <input type="text" className='input' placeholder='email@gmail.com' onChange={((e)=>setRegisterData({...registerData,id:e.target.value}))} />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faLock} className='me-2' />
          <input type="text" className='input' placeholder='password' onChange={((e)=>setRegisterData({...registerData,password:e.target.value}))}/>
          </div>
            <div className='d-flex justify-content-between mt-2'>
              <button className='btn btn-danger'>cancel</button>
              <button className='btn btn-success' onClick={handleSubmit}>Sign up</button>
            </div>
            <Link to={'/login'} style={{textDecoration:'none',color:'black'}}><p className='mt-5 text-center'>Already a user?<span><a className='ms-1' href="">Sign in</a></span></p></Link>
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