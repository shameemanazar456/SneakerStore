import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './pages/Cart'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false)
  const [uid, setUid] = useState(null)

  return (
    <>
    <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    <Routes>
      <Route path='/' element={<Home  />}/>
      <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin} setUid= {setUid}/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<Cart uid={uid} isLoggedin={isLoggedin} />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
