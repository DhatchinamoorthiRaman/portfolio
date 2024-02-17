import React from 'react'
import "./TopContent.css"
// import { requirePropFactory } from '@mui/material'
// import image from '../../../assests/image (2).jpg'

const TopContent = () => {
  return (
    <div className='whole'>
    <div className='image'>
      <img src={require("../../../assests/image (2).jpg")}  alt='profile_pic'/>

      
    </div>
    <div className='content'>
    <div className='describe'>
        <h1>DHATCHINAMOORTHI R</h1>
        <h4>BE MECHANICAL ENGINEERING</h4>
    </div>
    <div className="button">
      <a href="https://drive.google.com/file/d/1o0QMqLNbXXneFffN0_Brb0UMoenH57X_/view" target="_blank" >
        <button className='resume'>DOWNLOAD CV</button>
      </a>

    </div>

    </div>

    
  </div>
    
  )
}

export default TopContent