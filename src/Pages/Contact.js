import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../Styles/Contact.css'
import Slide  from '../Images/slide.jpg'
import Footer from './Footer';
const Contact = () => {
  return (
    <>
    <div className='ima' style={{backgroundImage:`url(${Slide})`}}> 
     <div  className='conata'>
        <div className='row'>
          <div className='col-md-7'>
            <h4>Get In Touch</h4><hr/>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
           </div>
           <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
           </div>
           <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Number"/>
           </div>
           <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"placeholder='Type Your Message'></textarea>
           </div>
           <button className='btn btn-primary'>Send</button>
          </div>
          <div className='col-md-5'>
              <h4>contact Us</h4><hr/>
              <div className='mt-5'>
              <div className='d-flex'>
              <i className="bi bi-geo-alt-fill"></i>
              <p>Address: 33 South Street, Coimbatore India 621014</p>
              </div><hr/>
              <div className='d-flex'>
              <i className="bi bi-telephone-fill"></i>
              <p>Contact: 9344973068</p>
              </div><hr/>
              <div className='d-flex'>
              <i className="bi bi-envelope-fill"></i>
              <p>Email: Cofffeeeshop@gmail.com</p>
              </div><hr/>
              <div className='d-flex'>
              <i className="bi bi-browser-chrome"></i>
              <p>Website: www.Cofffeeeshop.com</p>
              </div><hr/>
              <div className='d-flex'>
             <p>Follow Us: &nbsp; </p>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-instagram"> </i>
              <i className="bi bi-meta"> </i>
              <i className="bi bi-whatsapp"> </i>
              <i className="bi bi-youtube"> </i>
              <i className="bi bi-threads-fill"> </i>
              </div><hr/>
              </div>
          </div>
        </div>
      </div>  
   
 </div>   
      <Footer/>  
      </> 
  )
}

export default Contact
