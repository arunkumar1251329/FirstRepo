import React from "react";
import logo from '../assets/website_logo.png';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return(
      <div class='header'>
        <Link to='/' className="header_logo_link"><img class="header_logo" src={logo} /></Link>
        <div class='header_menu'>
            <div class='header_menu_item1'>Package</div>
            <div class='header_menu_item2'>Rat My Business</div>
            <div class='header_login' onClick={() => scrollToSection('book_ride_section')}>Log in</div>
            <div class='header_menu_item3'>Partner</div>
            <Link to="/about" className='header_menu_item4'>About</Link>
        </div>
      </div>
    );
};

export default NavBar
