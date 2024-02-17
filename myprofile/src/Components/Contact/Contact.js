import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css'
import { IconButton } from '@mui/material'
// import { Instagram } from '@mui/icons-material/Instagram'
// import { Facebook } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'


const Contact = () => {
  return (
    <Element name="contact">
        
        <div className='contact_content'>
            <div className='mail'>
                <h3>mail id : <a>moorthi280303@gmail.com</a></h3>
            </div>
            <div className='phone_no'>
                <h3>phone no : <a>9345786353</a></h3>
            </div>
            <div className='logo'>
                <a href="https://www.instagram.com/rdm280303/" target='_blank'>
                     <div>
                    
                        <InstagramIcon/>
                   
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/dhatchinamoorthi-r-944074204/" target='_blank'>
                    <div>
                    
                        <LinkedInIcon/>
               
                    </div>

                </a>
                <a href="https://twitter.com/RDM82745534" target='_blank'>
                    <div>
                    
                        <TwitterIcon/>
               
                    </div>

                </a>
                
            </div>

        </div>
    </Element>
  )
}

export default Contact