import React from 'react'
import Header from './Components/header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import Skills from './Components/Skills/Skills';
import Certificate from './Components/Certificate/Certificate';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <div>
   
      <div>
        <Header/>
        <TopContainer/>
        <Skills/>
        <Certificate/>
        <Contact/>
      </div>
    </div>
    

  )
}



export default App;
