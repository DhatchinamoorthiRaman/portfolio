import React from 'react'
import skill from '../../assests/skills.jpg'
import { Element } from 'react-scroll'
import './Skills.css'
import { LinearProgress } from '@mui/material'
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
// import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress'

// function Lineardeterminate() {
//   return (
//     <Box sx={{ width: '100%' }}>
//       <LinearProgress />
//     </Box>
//   );
// }


function Skills() {
  return (
    <Element name="skills" className='skillcontent'>

      <div className='skill_pic'>
        <img src={skill} alt='skill_pic' />
      </div>
      <div className='skillset'>
        <h1>SKILLSET</h1>
        <div>
          <h4>JAVA</h4>
          <div className='linear'>
           <LinearProgress variant='determinate' value={80}/>
            
          </div>

        </div>
        <div>
          <h4>C</h4>
          <div className='linear'>
           <LinearProgress variant='determinate' value={60}/>
            
          </div>
          </div>
        <div>
          <h4>MYSQL</h4>
          <div className='linear'>
           <LinearProgress variant='determinate' value={70}/>
            
          </div>
          </div>
        <div>
          <h4>JAVASCRIPT</h4>
          <div className='linear'>
           <LinearProgress variant='determinate' value={65}/>
            
          </div>
          </div>
        <div>
          <h4>REACT</h4>
          <div className='linear'>
           <LinearProgress variant='determinate' value={50}/>
            
          </div>
          </div>


      </div>

    </Element>
  )
}

export default Skills