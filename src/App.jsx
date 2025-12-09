import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Title from './components/Title'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experiences from './components/Experiences'

function App() {


  return (
    <div className='flex flex-col'>
      <NavBar/>
      <Title/>
      <About/>
      <Projects/>
      <Experiences/>
      <Footer/>
    </div>
  )
}

export default App
 