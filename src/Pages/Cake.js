import React from 'react'
import White from '../Images/white.jpg'
import C11 from '../Images/c11.jpg'
import C12 from '../Images/c12.jpg'
import C13 from '../Images/c13.jpg'
import C15 from '../Images/c15.jpg'
import C16 from '../Images/c16.jpg'
import C17 from '../Images/c17.jpg'
import C18 from '../Images/c18.jpg'
import C19 from '../Images/c19.jpg'
import '../Styles/Cake.css'
import { NavLink } from 'react-router-dom'
import Stars from './Stars'
import Footer from './Footer'
const Cake = () => {
  return (
    <>
    <div className='imagee' style={{backgroundImage:`url(${White})`}}> 
    <div className='bu'>
         <NavLink to="/menu"> <button id="bt">Order Now</button></NavLink>
         <NavLink to="/Cake"> <button id="bt">Cake</button></NavLink>
          <NavLink to="/Snack"> <button id="bt">Snack</button></NavLink>
    </div>
        <div className='card-container'>
          <div className='car'>
              <img src={C11} alt=""/>
              <div className='car-content'>
              <h1>Cheesecake</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={C12} alt=""/>
              <div className='car-content'>
              <h1>Americano</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="#" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={C13} alt=""/>
              <div className='car-content'>
              <h1>Americano</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={C19} alt=""/>
              <div className='car-content'>
              <h1>Americano</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={C15} alt=""/>
              <div className='car-content'>
              <h1>Americano</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={C16} alt=""/>
              <div className='car-content'>
              <h1>Americano</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={C17} alt=""/>
              <div className='car-content'>
              <h1>Americano</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={C18} alt=""/>
              <div className='car-content'>
              <h1>Americano</h1>
              <Stars/>
              <p> A caffè mocha.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
       </div>
       </div> 
       </>
  
  )
}

export default Cake
