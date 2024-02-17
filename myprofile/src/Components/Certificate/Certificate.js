import React from 'react'
import './Certificate.css'
import Certi from './certi/Certi'
import { Element } from 'react-scroll'

const Certificate = () => {
    const certifi=[
        {
            img:"learnathon",
            des:"participated learnathon by completing several courses offered by learnathon on stipulated time "
        },
        {
            img:"java",
            des:"completed certificated java intermediate course offered by infosys"
        },
        {
            img:"python",
            des:"completed certificated python intermediate course offered by coding ninjas"
        },
        {
            img:"machine learning",
            des:"completing machine learning course offered by coursera and got certificate"
        },
        {
            img:"solidworks",
            des:"completed CSWA solidworks 3d modelling software and secured top score"
        },
        {
            img:"fusion 360",
            des:"completed autodesk fusion 360 course offered by coursera "
        }
    ]

  return (
    <Element name="certificates">
    <div className='certificate_content'>
        <h1>CERTIFICATES</h1>
        <p>some of the certificates,I got received</p>
    <div className='certificate'>
        {
            certifi.map((cer,index)=>
            {
                return(<Certi key={index} img={cer.img} des={cer.des}/>)
                
            })

        }
        {/* <h1>hello</h1> */}
        </div>
    </div>
    </Element>
  )
}

export default Certificate