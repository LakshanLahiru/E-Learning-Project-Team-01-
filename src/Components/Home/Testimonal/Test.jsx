import React from 'react'
import './style.css'
import Title from '../../nevbar/Title/Title'
import { testimonal } from '../../../dummydata'

const Test = () => {
  return (
    <>
        <section className='testimonal padding'>
            <div className='container'>
                <Title subtitle='testimonal' title='our successful student' />

                <div className='content grid2'>
                    {testimonal.map((val) => (
                        <div className='itemshadow'>
                            <div className='boxflex'>
                                <div className='imgTest'>
                                    <img src={val.cover} alt='' />
                                    <i className='lefticon'></i>
                                </div>
                                <div className='name'>
                                    <h2>{val.name}</h2>
                                    <h5>{val.post}</h5>
                                </div>
                            </div>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Test