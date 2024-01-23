import React from "react"
import { BiLogoFirebase } from "react-icons/bi";
import "./nevbar.css";


const NevBarIcon = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <div className="book">
              <BiLogoFirebase  />
              <h1>IT Master</h1>
            </div>
          
            
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          
        </div>
        
      </section>
      
    </>
  )
}

export default NevBarIcon