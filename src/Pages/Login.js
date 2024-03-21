import React from 'react'
import Back3 from '../Images/back3.jpg'
import '../Styles/Sign.css'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Login = () => {
  return (
    <>
    <div className='i' style={{backgroundImage:`url(${Back3})`}}>
         <div className='wrap'>
          <h1 className='up'>LogIn </h1>
          <form action="#">
            <input type="text" placeholder='Username' required></input>
            <input type="password" placeholder='Enter Your Passowrd'required></input>  
             <div className='recover'>
                   <a href='#'>Forgot Passowrd</a>
             </div>
          </form>
          <NavLink  to="/home" style={{ textDecoration:'none'}}> <button className='sign'>Login</button></NavLink>
          <div className='member'>
          Not  a member? <a><NavLink  to="/sign">Resgister</NavLink></a>
          </div>
         </div>
     
    </div>
        <Footer/>
        </>
  )
}

export default Login
