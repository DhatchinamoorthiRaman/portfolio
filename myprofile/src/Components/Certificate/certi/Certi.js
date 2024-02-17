import React, { useState } from 'react'
import "./Certi.css"

const Certi = ({img,des}) => {

    const[show,setShow]=useState(false)
  
    
  return (
    <a href="#">
      <div className='certificates' onMouseEnter={()=>setShow(true)}  onMouseLeave={()=>setShow(false)}>
        {
        // show(onmouseenter(()=>setShow=false) , onmouseleave(()=>setShow=true))
        show ? 
        <div>
          <h4>{des}</h4>
        </div>:
        <div className='photo'>
            <img src={require(`../../../assests/${img}.jpg`)} alt=''/>
            {/* <img src={require('../../../assests/skills.jpg')} alt=""/> */}


            {/* <h4>{img}</h4> */}
        </div>
       
        
        }

    </div>

    </a>
    
  // <div>
  //   {/* <h1>{des}</h1> */}
  // </div>
   )
}

export default Certi