import React from 'react';
import '../styles/Hero.css';
import profile from '../assets/profile/profile.jpg';

const Hero = () => {
  return (
    <div className='hero' id='about'>
        <div className='hero-para'>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className='hero-image'>
            <img src={profile} alt="myself" />
        </div>
    </div>
  )
}

export default Hero;