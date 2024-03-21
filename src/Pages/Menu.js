import React from 'react'
import White from '../Images/white.jpg'
import Coffee1 from '../Images/f1.jpg'
import Coffee2 from '../Images/f2.jpg'
import Coffee3 from '../Images/f3.jpg'
import Coffee4 from '../Images/f4.jpeg'
import Coffee5 from '../Images/f5.jpeg'
import Coffee6 from '../Images/f6.jpg'
import Coffee7 from '../Images/f7.jpeg'
import Coffee9 from '../Images/f9.jpg'
import Coffee10 from '../Images/f10.jpg'
import Coffee11 from '../Images/f11.jpg'
import Coffee12 from '../Images/f12.jpg'
import Coffee13 from '../Images/c99.jpeg'
import '../Styles/Menu.css'
import { NavLink } from 'react-router-dom'
import Stars from './Stars'
import Footer from './Footer'



const Menu = () => {
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
            <img src={Coffee13} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="#" className='card-button'>Buy Now</a>
           
         </div>
         </div>
         <div className='car'>
            <img src={Coffee1} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="#" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee3} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee4} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee5} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee6} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee7} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee2} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee12} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee11} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="#" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee10} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A caffè mocha.</p>
            <a href ="#" className='card-button'>Buy Now</a>
         </div>
         </div>
         <div className='car'>
            <img src={Coffee9} alt=""/>
            <div className='car-content'>
            <h1>Americano</h1>
            <Stars/>
            <p> A  mocha.</p>
            <a href ="" className='card-button'>Buy Now</a>
         </div>
         </div>
     </div>


    
{/*      
     
    <div className='headerContainer'>
     <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4 py-5">

            <div className="col">
                <div className="card">
                    <img src={Eight}class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Chocolate Coffee</h5>
                        <p className="card-text"> A caffè mocha.</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 300</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card">
                    <img src={One}class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Cappanico</h5>
                        <p className="card-text">For the coffee connoisseur.</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 250</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={Three} class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Cortado</h5>
                        <p className="card-text"> Espresso and steamed milk.</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 150</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={Four}class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Drip Coffee</h5>
                        <p className="card-text"> Pouring hot water.</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 50</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={Five}class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Flat White</h5>
                        <p className="card-text"> blend of micro-foamed milk poured.</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 850</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="card">
                    <img src={Six}class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Espresso Shot</h5>
                        <p className="card-text">coffee beverage and a brewing.</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 100</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={Six}class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Iced Latte</h5>
                        <p className="card-text"> chilled coffee beverage .</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 250</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={Seven}class="img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title ">Macchiato</h5>
                        <p className="card-text">latte macchiato.</p>
                    </div>
                    <div className="mb-5 d-flex justify-content-around">
                        <h3> ₹ 250</h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
   </div>
   </div>
   </div>   */}



    </div> 

 </>

  )
}

export default Menu
