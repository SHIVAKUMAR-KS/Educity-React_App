import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
 
const App = () => {
  const [playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        {/* /*These are happen due to props/* */}
        <Title subtitle='OUR PROGRAM' title='What we offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='GALLERY' title='Campus Photo'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Students says'/>
        <Testimonial/>
        <Title subtitle='Contact us' title='Get in Touch'/>
        <Contact/>
        <Footer/>

      </div>
      
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
