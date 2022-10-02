import React, { useState } from 'react';
import Header from './Header';
import logo from '../images/logo.png';

function Navbar() {

  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className='logo'>
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label className='menu-icon' for="menu-btn">
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><a href="/" className='active'>Home</a></li>
        <li><a href="#features">Feature</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#presentation">UI Presentation</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="">Download</a></li>
      </ul>
    </nav>
  )
}

export default Navbar