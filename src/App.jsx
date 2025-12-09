import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Title from './components/Title'
import About from './components/About'

function App() {


  return (
    <div className='flex flex-col space-y-100'>
      <NavBar/>
      <Title/>
      <About/>
    </div>
  )
}

export default App
 