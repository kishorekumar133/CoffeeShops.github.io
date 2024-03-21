import React from 'react'
import Back from '../Images/back1.jpeg'
import '../Styles/Book.css'
import Footer from './Footer'
const Book = () => {
  return (
    <>
    <div className='image' style={{backgroundImage:`url(${Back})`}}>
      <div className='book'>
      <div className='for'>
        <div className='for-text'>
          <h1><span><i class="bi bi-snow2"></i></span>Book Now<span><i class="bi bi-snow2"></i></span></h1>
          <p className='your'>Book your table Enjoy Your day</p>
        </div>
      <div className='main-form'>
        <form action="index.php" method='get'>
          <div>
            <span>Enter Your Full name</span>
              <input type ="text" name="name" id="name" placeholder='Your Name' required/>
          </div>
          <div>
            <span>Enter Your Email</span>
              <input type ="email" name="name" id="name" placeholder='Email Address' required/>
          </div>
          <div>
            <span>How Many People ? </span>
              <input type ="number" min ='1'name="people" id="people"placeholder='<---people--->'required/>
          </div>
          <div>
            <span>What is Time ?</span>
              <input type ="time" name="time" id="time" placeholder='Time'required/>
          </div>
          <div>
            <span>What is the date ?</span>
              <input type ="date" name="date" id="date"placeholder='Enter a date'required/>
          </div>
          <div>
            <span>Enter Your Phone number</span>
              <input type ="text" name="number" id="number"placeholder='Phone Number'required/>
          </div>
      
         <div id='submit'>
              <input type ="submit" value='Submit'name="" id="submit"/>
              </div>
        </form>
      </div>
      </div>
      </div>
   
      </div>
         <Footer/>
         </>
  )
}

export default Book
 