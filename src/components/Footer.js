import React from 'react';
import '../styles/Footer.css';

// social icons
import youtube from '../assets/social/youtube.png';
import facebook from '../assets/social/facebook.png';
import gmail from '../assets/social/gmail.png';
import x from '../assets/social/x.png';
import insta from '../assets/social/insta.png';

const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <h2>Stay in Touch With Me</h2>
        <div className='gmail'>
            <img src={gmail} alt="gmail" />
            <p>travelworldexperience.example@gmail.com</p>
        </div>
        <div className='social-icons'>
            <a href="#"><img src={youtube} alt="youtube" /></a>
            <a href="#"><img src={insta} alt="instagram" /></a>
            <a href="#"><img src={facebook} alt="facebook" /></a>
            <a href="#"><img src={x} alt="twitter-X" /></a>
        </div>
    </div>
  )
}

export default Footer;