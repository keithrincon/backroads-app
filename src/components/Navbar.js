import React from 'react';
// import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

function Navbar() {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 600) {
      // Adjust this value based on your hero section height
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='nav-logo' alt='backroads' /> */}
          <h2>Novedad</h2>
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass='nav-icon' />;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
