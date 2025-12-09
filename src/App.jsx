import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Title from './components/Title'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <div className='flex flex-col'>
      <NavBar/>
      <Title/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
 