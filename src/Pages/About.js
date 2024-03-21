import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Ab from '../Images/ab1.jpg'
import Ab1 from '../Images/ab2.jpg'
import Ab4 from '../Images/ab4.jpg'
import Ab5 from '../Images/ab5.jpg'
import Ab6 from '../Images/ab6.jpg'
import '../Styles/About.css'
import Our1 from '../Images/our1.webp'
import Our2 from '../Images/our2.webp'
import Our3 from '../Images/our3.webp'
import Our4 from '../Images/our4.webp'
import Revi1 from '../Images/revi1.png'
import Revi2 from '../Images/revi2.png'
import Revi4 from '../Images/revi4.png'
import Footer from './Footer'
const About = () => {
  return (
    <>
        
          <h1 className='our'>Our Happy Customer</h1>
          <Container>
      <Row>
        <Col >
          <Image src={Ab4} alt='' rounded className='iii' />
        </Col>
        <Col >
          <Image src={Ab5} roundedCircle className='iii'/>
        </Col>
        <Col >
          <Image src={Ab6} rounded className='iii'/>
        </Col>
      </Row>
    </Container>
        <h1 className='hii'>Our Team</h1>
        <div className='contain'>
          <div className='card__contain'>
            <article className='card__article'>
              <img src={Our1} alt ="" className='card__img'/>
               <div className='card__data'>
              <span className='card__description'>Lisha</span>
              <h2 className='card_title'>Chef</h2>
              <a href ="#" className='card__button'>Read More</a>
              </div>
            </article>

            <article className='card__article'>
              <img src={Our2} alt ="" className='card__img'/>
              <div className='card__data'>
              <span className='card__description'>Cathrine</span>
              <h2 className='card_title'>Cafe Server</h2>
              <a href ="#" className='card__button'>Read More</a>
              </div>
            </article>

            <article className='card__article'>
              <img src={Our3} alt ="" className='card__img'/>
              <div className='card__data'>
              <span className='card__description'>Alina</span>
              <h2 className='card_title'>Store Manager</h2>
              <a href ="#" className='card__button'>Read More</a>
              </div>
            </article>

            <article className='card__article'>
              <img src={Our4} alt ="" className='card__img'/>
              <div className='card__data'>
              <span className='card__description'>Rosine</span>
              <h2 className='card_title'>Ceo</h2>
              <a href ="#" className='card__button'>Read More</a>
              </div>
            </article>
          </div>
        </div>
         
        <section id="about">
         <div className='container'>
         <div className='heading'>About<span>Us</span></div>
        <div className='row'>
           <div className='col-md-6'>
             <div className='card'>
               <img src={Ab} alt=""/>
             </div>
           </div>
           <div className='col-md-6'>
             <h1>Discove Your Best Latte Coffee</h1>
             <p>Professional coffee makers, often found in specialty coffee shops and high-end establishments, are designed to extract the full spectrum of flavors and aromas from the coffee beans.</p>
           <button id="about-btn">Learn More</button>
           </div>
         </div>
         </div>
      </section> 
      <section id="about">
         <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
             <h1>The Best Coffee From Professional Coffee Makers</h1>
             <p>Professional coffee makers, often found in specialty coffee shops and high-end establishments, are designed to extract the full spectrum of flavors and aromas from the coffee beans.</p>
           <button id="about-btn">Learn More</button>
           </div>
           <div className='col-md-6'>
             <div className='card'>
               <img src={Ab1} alt="" />
             </div>
           </div>
         </div>
         </div>
      </section>
     <section className='reviews' id="reviews">
      <h3>Customer <span>Review</span></h3>
        <div className='review-card'>
          <div className='rowes'>
            <div className='rating'>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            </div>
            <p>I really like the atmosphere, good coffee, and nice interior. This is a good place to study or chill with friends. The drinks and foods were all tasty and worthwhile. If you’re up for a fresh place with beautiful architecture then this is a must to visit.</p>
          <h6><img src={Revi1}alt=""/>
                   Carmen</h6>


          </div>
          <div className='rowes'>
            <div className='rating'>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            </div>
            <p> This place is amazing! They offered the best coffee and showed the best attitude to its costumers. This place is indeed perfect for studying and chilling out. It was very quiet and air-conditioned. I just want to keep coming back to this place. Thank you!</p>
          <h6><img src={Revi2}alt=""/> Charlie</h6>

          
          </div>
          <div className='rowes'>
            <div className='rating'>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            </div>
            <p>I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying.The cappuccinos was wonderful too well .If you like your coffee shops, then this is a must-visit! We will be back again!</p>
          <h6><img src={Revi4}alt=""/>Carter</h6>
          </div>
        </div>
     </section>
        <Footer/>
        </>  
  )
}

export default About
