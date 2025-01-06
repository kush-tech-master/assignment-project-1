import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header'
import About from './About'
import Service from './Service'
import TeamAndProject from './TeamAndProject'
import Client from './Client'
import Footer from './Footer'

function App() {
  

  return (
    <>
     <Header/>
     <About/>
     <Service/>
     <TeamAndProject/>
     <Client/>
     <Footer/>
     
    </>
  )
}

export default App
