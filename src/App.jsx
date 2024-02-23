import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        {/* /*These are happen due to props/* */}
        <Title subtitle='OUR PROGRAM' title='What we offer'/>
        <Program/>
        <About/>
        <Title subtitle='GALLERY' title='Campus Photo'/>
        <Campus/>
        <Title>subtitle</Title>
      </div>
      
      
    </div>
  )
}

export default App
