import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <nav>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonial</li>
                <li>Contact us</li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
