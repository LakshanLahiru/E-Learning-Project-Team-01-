import React from 'react'

import { homeAbout } from '../../dummydata'
import "./about.css"
import AWrapper from './AWrapper'
import Title from '../nevbar/Title/Title'
const img1 ="https://img.icons8.com/dotty/80/000000/storytelling.png"
const img2 ="https://img.icons8.com/ios/80/000000/diploma.png";
const img3 ="https://img.icons8.com/ios/80/000000/athlete.png";
export const AboutCard = () => {
  return (
    <>
    
    <section className='aboutHome'>
        <div className="container flexSB">
          <div className="left row">
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='box'>
          <Title subtitle={"LEARN ANYTHING"} title={"Benifits About Online Learning"} />
          {/*<div className="items">
            {homeAbout.map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt='' />
                  {/*<div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
            </div>
                </div>
                
                
              </div>
              
            ))}
            </div>*/}
          
            <div className='b1'>
              <img   src={img1}/>
            <h1>Online Courses</h1>
          <h4>Online courses offer flexibility, enabling learners to study at their own pace and schedule, accommodating diverse lifestyles. Accessibility to a global pool of educational resources enhances subject variety. Cost-effectiveness eliminates the need for commuting and provides affordable education options.</h4>
            </div>
            <div className='b2'>
            <img  src={img2}/>
              <h1>Earn A Certificates</h1>
                <h4>Earning certificates through online courses provides tangible validation of skills and knowledge. These credentials enhance employability and career advancement by showcasing specialized expertise. Certificate programs offer focused, industry-relevant content, allowing learners to acquire practical skills efficiently.</h4>
            </div>
            <div className='b3'>
            <img  src={img3}/>
              <h1>Learn with Expert</h1>
               <h4>Learning with experts provides a unique opportunity to gain insights directly from professionals with extensive knowledge and experience in a specific field. Expert-led learning experiences offer practical and real-world perspectives, fostering a deeper understanding of the subject matter.</h4>
            </div>
            </div>        
        </div>
      </section>
      <AWrapper />
     
    
    </>
  )
}

export default AboutCard