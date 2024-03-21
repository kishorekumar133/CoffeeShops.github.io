import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'
import Star from '../Styles/Star.css'
export default function Stars(){
const [rating,setRating]=useState(null)
const [rateColor,setColor]=useState(null)
  return (

         <>
           {[...Array(5)].map((star,index)=>
            {
              const currentRate =index+1
               return(
               <>
               
                <label>
                <input type="radio" className="rate" 
                value={currentRate} onClick={()=>setRating(currentRate)}
                />
                <FaStar size={30}
                color={currentRate <= (rateColor || rating) ? "brown":"grey"}/>
                </label>
               
               
               
               </>
               
               )

            })}
         
         </>

  )

}



