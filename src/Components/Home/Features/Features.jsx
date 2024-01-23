import React from 'react'
import './Features.css'
import Title from '../../nevbar/Title/Title'
import { features } from '../../../dummydata'



export const Features = () => {
  return (
    <>
        <section className='features'>
            <div className='container'>
                <Title subtitle='features' />

                <div className='content grid1'>
                    {features.map((val) => (
                        <div className='itemshadow'>
                            <div className='box flex'>
                                <div className='name1'>
                                    <h3>{val.name}</h3>
                                    <span>{val.post}</span>
                                </div>
                            </div>
                            <p>{val.desc}</p>
                            <button className='primarybt'>
                                Learn More <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}