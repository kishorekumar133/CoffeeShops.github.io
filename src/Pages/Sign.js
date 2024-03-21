import React from 'react'
import '../Styles/Sign.css'
import Back3 from '../Images/back3.jpg'
import { NavLink } from 'react-router-dom'
import Footer from './Footer';
const Sign = () => {
  return (
    <>
    <div className='i' style={{backgroundImage:`url(${Back3})`}}>
         <div className='wrap'>
          <h1 className='up'>Sign Up</h1>
          <form action="#">
            <input type="text" placeholder='Username' required/>
            <input type="email" placeholder='Email Address' required/>
            <input type="password" placeholder='Password' required/>
            <input type="password" placeholder='Re Enter password' required/>  
          </form>
          <div className='terms'>
            <input type='checkbox' id='checkbox'/>
            <label for='checkbox'>&nbsp;I agree to these<a href='#'>&nbsp;Terms & Conditions</a></label>
          </div>
          <NavLink  to="/home" style={{ textDecoration:'none'}}> <button className='sign'>Sign Up</button></NavLink>
          <div className='member'>
            Already a member? <a><NavLink to="/Login">Login Here</NavLink></a>
          </div>
         </div>
       
    </div>
      <Footer/>
      </>
  )
}

export default Sign
