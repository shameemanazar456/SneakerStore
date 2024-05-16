import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Login.css'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { getUserDetailsApi } from '../APIcalls/AllAPI'

const Login = ({setIsLoggedin, setUid}) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([])
    const [username, setUsername]=useState("")
    const [password, setPassword] = useState("")
    console.log(username);
    console.log(password);

    const handleLogin = async(e)=>{
      e.preventDefault()
       if(!username || !password){
       if( !username & !password){
        alert('Please enter username and password')
       }
       else{

        !username  && alert('Please fill username')
        !password && alert('please fill password')
       }
        
       }
       else{
        let loggeduser = userData.find((item)=>item?.id == username && item?.password == password)
        console.log(loggeduser);
        if(loggeduser){
            alert('Login Successfull')
            setIsLoggedin(true)
            setUid(loggeduser.id)
            navigate("/")

        }
        else{
            alert('Please check username/password')
        }
      }
 
    }
    const getData = async()=>{
       const response = await getUserDetailsApi();
      console.log(response.data);
      setUserData(response.data)}

    useEffect(()=>{
     getData();
    },[])
  return (
    <div className='d-flex align-items-center justify-content-center mt-5 '>
      <Row className='mt-5 ' style={{width:'75%', height:'75%'}}>
        <Col md={6} style={{ height:'75vh' }} >
          <div className='d-flex justify-content-center align-items-center'>
          <img src="https://najas06.github.io/RARE-KICKS/shoe3.gif" alt="" style={{width:'100%',height:'75vh',padding:'0',margin:'0'}}/>
          </div>
        </Col>
        <Col md={6} style={{backgroundColor:'white'}}>
          <div className=' p-3'>
          <div id='login'>
            <div>
              <div className='d-flex justify-content-center align-items-center'>
                <img src="https://najas06.github.io/RARE-KICKS/logo.png" alt="" width={150} height={150}/>
              </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faUser} className='me-2'/>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} className='input' placeholder='Email'  />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faLock} className='me-2' />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='password' />
          </div>
            <div className='d-flex justify-content-center align-items-center mt-2'>
              <button className='btn btn-success ' type='button' onClick={handleLogin}>Sign in</button>
            </div>
              <p className='mt-5 text-center'>New here?<span><Link to={'/register'} className='ms-1' href="">Sign up</Link></span></p>
          </div>
        </div>
          </div>
        </Col>
      </Row>
    </div>
)}

export default Login
