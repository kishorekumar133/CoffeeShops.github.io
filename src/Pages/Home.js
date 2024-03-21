import React from 'react'
import '../Styles/Styles.css'
import Slide from '../Images/slide.jpg'
import Card from './Card'
import {NavLink} from 'react-router-dom'
import Product from './Product'
import About from './About'
import Menu from './Menu'

const Home = () => {
  return (
    <>
  <div className='image' style={{backgroundImage:`url(${Slide})`}}>
    <section id="home">
      <div className='content'>
        <h3>Start Your day With a </h3>
        <h3>Fresh Coffee</h3>
        <p>We Dont Make Your Coffee. We Make Your day</p>
        </div>
        <div className='butt'>
       <NavLink to="/menu"> <button id="btn">Order Now</button></NavLink>

        <NavLink to="/book"> <button id="btn">Book Now</button></NavLink>
  </div>
    </section>
    </div>
        <Card/>
        <Menu/>
        <Product/>
        <About/> 
        
    
  
    </>
  )
}

export default Home
