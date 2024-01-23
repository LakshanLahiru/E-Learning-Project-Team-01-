import React from 'react'
import './Hero.css'
import Title from '../../nevbar/Title/Title'


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO ACADEMY' title='Best Online Education' />
            <p>"Beyond textbooks, beyond classrooms. Welcome to a realm where learning is liberated. Join us on the frontier of e-education."</p>
            <div className='button'>
              <button className='primary-btn'>
                JOIN NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
            </div>
          </div>
        </div>
      </section>
      
      <div className='margin'></div>
      
    </>
  )
}

export default Hero