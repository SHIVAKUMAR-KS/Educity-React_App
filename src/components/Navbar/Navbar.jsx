import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu,setMobile]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobile(false):setMobile(true);
  }

  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={0} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={0} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
          <li><Link to='testimonial' smooth={true} offset={0} duration={500}>Testimonial</Link></li>
          <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon ' onClick={toggleMenu}/>

      </nav>
    </div>
  );
};

export default Navbar;
