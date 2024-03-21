import React from 'react'
import Product1 from '../Images/p1.jpg'
import Product2 from '../Images/p2.jpg'
import Product3 from '../Images/p3.jpg'
import Product4 from '../Images/p4.jpg'
import Product5 from '../Images/p5.jpg'
import Product6 from '../Images/p6.jpg'
import Product7 from '../Images/p7.jpg'
import Product8 from '../Images/p8.jpg'
import Slide  from '../Images/slide.jpg'
import '../Styles/Product.css'
const Product = () => {
  return (
    <>
    <div className='image' style={{backgroundImage:`url(${Slide})`}}> 
    
        <div className='star'>
        <h1 className='pro'> Our Products </h1>
        <div id="card-area">
          <div className='wrapper'>
            <div className='box-area'>
              <div className='box'>
                <img src={Product1}alt=""/>
                <div className='overlay'>
                  <h3>Burma Coffee<br/>₹150.00</h3>
                  <p>Premium Blended Aromated Coffee</p>
       
               <a href="#">Add to Cart</a>
                </div>
              </div>
              <div className='box'>
                <img src={Product2}alt=""/>
                <div className='overlay'>
                  <h3>kenya Coffee<br/>₹320.00</h3>
                  <p>Dark Roast Blended Bean Coffee</p>
               <a href="#">Add to Cart</a>
                </div>
              </div>
              <div className='box'>
                <img src={Product3}alt=""/>
                <div className='overlay'>
                  <h3>Kerala Coffee<br/>₹120.00</h3>
                  <p>Lightly Roasted Classic Filter Coffee</p>
               <a href="#">Add to Cart</a>
                </div>
              </div>
              <div className='box'>
                <img src={Product4}alt=""/>
                <div className='overlay'>
                  <h3>Nilgiri Coffee<br/>₹260.00</h3>
                  <p>Flavoured Medium Roasted Irish Coffee</p>
               <a href="#">Add to Cart</a>
                </div>
              </div>
              <div className='box'>
                <img src={Product5}alt=""/>
                <div className='overlay'>
                  <h3>Orissa Coffee<br/>₹420.00</h3>
                  <p>Pure Filter Blended Italian Cold Coffee</p>
               <a href="#">Add to Cart</a>
                </div>
              </div>
              <div className='box'>
                <img src={Product6}alt=""/>
                <div className='overlay'>
                  <h3>Assam Coffee<br/>₹170.00</h3>
                  <p>Gold Rich Instant Coffee Powder</p>
               <a href="#">Add to Cart</a>
                </div>
              </div>
              <div className='box'>
                <img src={Product7}alt=""/>
                <div className='overlay'>
                  <h3>Koha Coffee<br/>₹320.00</h3>
                  <p>rich Creamy Fresh Flavour Instant Coffee</p>
               <a href="#">Add to Cart</a>
                </div>
              </div>
              <div className='box'>
                <img src={Product8}alt=""/>
                <div className='overlay'>
                  <h3>Uttar Coffee<br/>₹250.00<br/></h3>
                  <p>Strong Roasted Classic Arbica Black Coffee</p>
               <a href="#">Add to Cart</a>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
        </div>
             </div> 
   </>
    
  
   
  )
}

export default Product;
