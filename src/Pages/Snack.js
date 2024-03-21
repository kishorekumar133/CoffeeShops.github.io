import React from 'react'
import S1 from '../Images/s1.jpg'
import S2 from '../Images/s2.jpg'
import S3 from '../Images/s3.jpg'
import S4 from '../Images/s4.jpg'
import S5 from '../Images/s5.jpg'
import S6 from '../Images/s6.jpg'
import S7 from '../Images/s7.jpg'
import S8 from '../Images/s8.jpg'
import '../Styles/Cake.css'
import { NavLink } from 'react-router-dom'
import White from '../Images/white.jpg'
import Stars from './Stars'

const Snack = () => {
  return (
    <div className='imagee' style={{backgroundImage:`url(${White})`}}> 
    <div className='bu'>
         <NavLink to="/menu"> <button id="bt">Order Now</button></NavLink>
         <NavLink to="/Cake"> <button id="bt">Cake</button></NavLink>
          <NavLink to="/Snack"> <button id="bt">Snack</button></NavLink>
    </div>
        <div className='card-container'>
          <div className='car'>
              <img src={S1} alt=""/>
              <div className='car-content'>
              <h1>Big Burger</h1>
              <Stars/>
              <p>
Juicy, savory, satisfying.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={S2} alt=""/>
              <div className='car-content'>
              <h1>Burger With Fries</h1>
              <Stars/>
              <p> 
Satisfying, classic, indulgent.</p>
              <a href ="#" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={S3} alt=""/>
              <div className='car-content'>
              <h1>French Fries</h1>
              <Stars/>
              <p> Crispy, golden, delicious.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={S4} alt=""/>
              <div className='car-content'>
              <h1>Bread Omlette</h1>
              <Stars/>
              <p> Delicious, simple, satisfying.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={S5} alt=""/>
              <div className='car-content'>
              <h1>Pizza</h1>
              <Stars/>
              <p>Delicious, versatile, comforting..</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={S6} alt=""/>
              <div className='car-content'>
              <h1>Shawarma</h1>
              <Stars/>
              <p> Delicious, savory, wrapped..</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={S7} alt=""/>
              <div className='car-content'>
              <h1>Samosa</h1>
              <Stars/>
              <p> 
Crispy, savory, triangular.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
           <div className='car'>
              <img src={S8} alt=""/>
              <div className='car-content'>
              <h1>Panni Puri</h1>
              <Stars/>
              <p>Crunchy, Spicy, Tangy.</p>
              <a href ="" className='card-button'>Buy Now</a>
           </div>
           </div>
       </div>
       </div> 
       
  )
}

export default Snack
