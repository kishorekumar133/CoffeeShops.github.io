import React from 'react'
import One from '../Images/1.jpg'
import Two from '../Images/2.jpg'
import Four from '../Images/4.jpg'
import Three from '../Images/3.jpg'
import Six from '../Images/6.jpeg'
import Blog6 from '../Images/blog6.webp'
import Cakes from '../Images/c2.jpg'
import '../Styles/Card.css'
const Card = () => {
  return (
    
     <div className='view'style={{backgroundImage:`url(${Six})`}}>     
        {/* <div className='bg-service'>
     <div className='service-one'>
       <img src={One}alt=""/>
       <div className='overlay'>
         <div className='over-text'>
          <p>For Drinks</p>
           <h4>Coffee & Drinks</h4>
         </div>
       </div>
     </div>
   <div className='service-one'>
       <img src={Two} alt=""/>
     <div className='overlay'>
         <div className='over-text'>
           <p>For Drinks</p>
           <h4>Coffee & Drinks</h4>
         </div>
       </div>
     </div>
    
     <div className='service-one'>
       <img src={Three} alt=""/>
     <div className='overlay'>
         <div className='over-text'>
           <p>For Drinks</p>
           <h4>Coffee & Drinks</h4>
         </div>
       </div>
     </div> 

     <div className='service-one'>
       <img src={Four}alt=""/>
       <div className='overlay'>
         <div className='over-text'>
           <p>For Drinks</p>
         <h4>Coffee & Drinks</h4>
         </div>
       </div>
     </div> 
   </div>   */}
   <h1 className='new'>EXPLORE THE NEW TASTE</h1>
     <section className='lorry'>
       <div className='grid'>
        <div className='cardss'>
          <div className='img-box'>
            <img src={Cakes}alt=""/>
          </div>
          <div className='card-content'>
          <h4 className='card-heading'>Ice Cream Cakes</h4>
          <p className='card-text'>
            COMING  SOON
          </p>
          </div>
        </div>
        <div className='cardss'>
          <div className='img-box'>
            <img src={Two}alt=""/>
          </div>
          <div className='card-content'>
          <h4 className='card-heading'>EVENING SNACKS</h4>
          <p className='card-text'>
          COMING  SOON
          </p>
          </div>
        </div>
        <div className='cardss'>
          <div className='img-box'>
            <img src={Three}alt=""/>
          </div>
          <div className='card-content'>
          <h4 className='card-heading'>ENRICH CREAMY ICECREAM</h4>
          <p className='card-text'>
          COMING  SOON
          </p>
          </div>
        </div>
        <div className='cardss'>
          <div className='img-box'>
            <img src={Four}alt=""/>
          </div>
          <div className='card-content'>
          <h4 className='card-heading'>CREAMY COLD COFFEE</h4>
          <p className='card-text'>
          COMING  SOON
          </p>
          </div>
        </div>
        </div>      
    </section> 
   </div>
   

   
  )
}

export default Card

