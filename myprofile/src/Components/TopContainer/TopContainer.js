import React from 'react'
import "./TopContainer.css"
import TopContent from './TopContent/TopContent'
import { Element } from 'react-scroll'

const TopContainer = () => {
  return (
    <Element name="about_me"> 
    {/* <div className='bg_image'></div> */}
    <TopContent/>
    
    </Element>
   
  )
}

export default TopContainer