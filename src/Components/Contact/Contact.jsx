import React from 'react';

import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook ,FaTwitter,FaYoutube,FaLinkedin} from "react-icons/fa";
import NevBar from '../nevbar/NevBar';
import Footer from '../Footer/Footer';




function Contact() {
  const map ='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d268592.21562711976!2d80.05209239536245!3d6.865689279032665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1705479608608!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (

    <>
    <section className='all'>
      <div><NevBar/></div>
    
    <div className='Contactus'>
      <div className='na'>HOME / CONTACT</div>
      <div className='co'>CONTACT US</div>

    </div>
    
    <section className='contacts padding'>
        <div className='container shadow flexSB'>
        
          <div className='left row'>
            <iframe src={map}></iframe>
            
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>Let's connect! Whether you have suggestions to share or just want to have a friendly chat, we're all ears. Your thoughts matter to us, so feel free to reach out anytime</p>

            <div className='items grid2'>
              <div className='box'>
              <FaLocationDot className='icon' />
                <h4>ADDRESS</h4>
                <p> No 203,Rajagiriya, Colombo, Sri Lanka </p>
              </div>
              <div className='box'>
              <MdEmail className='icon' />
                <h4>EMAIL</h4>
                <p> info@yourdomain.com</p>
              </div>
              <div className='box'>
              <FaPhoneSquareAlt className='icon' />
                <h4>PHONE</h4>
                <p> +011 392 3929 210</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <div className='iii'>
              <div className='face'>
                <h1> <FaFacebook /></h1>
             
                <h4>Facebook </h4>
              </div>
              <div className='twit'>
                <h1><FaTwitter/></h1>
                <h4>Twiter </h4>
                </div>
              <div className='ins'>
                <h1><FaYoutube/></h1>
                <h4>Youtube </h4>
                </div>
                <div className='lin'>
                <h1><FaLinkedin /></h1>
                <h4>Linkedin </h4>
                </div>
            </div>
            
          </div>
        </div>
      </section>
        <Footer/>
      </section>
    </>
  )
}

export default Contact