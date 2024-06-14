import '../styles/Navbar.css';
import React, { useRef } from 'react';

const Navbar = () => {

    const hamburger = useRef();
    const xIcon = useRef();
    const navList = useRef();

    function classToggler() {
        
        // hamburger toggle
        hamburger.current.classList.toggle("hamburger-show");

        // x-icon toggle
        xIcon.current.classList.toggle("x-close");

        // navList toggle
        navList.current.classList.toggle("nav-links-wrapper-close");
    }

  return (
    <nav className='Navbar'>
        <div className='icons-wrapper'>
            <h2>Travel World</h2>
            <div className='ham-function' onClick={() => classToggler()}>
                <div className='hamburger-close hamburger-show' ref={hamburger}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <div className='x-close x-show' ref={xIcon}>
                    <p>X</p>
                </div>
            </div>
        </div>

        <div className='nav-links-wrapper-show nav-links-wrapper-close' ref={navList}>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#europe-destinations'>Europe Travel</a></li>
                <li><a href='#upcoming-destinations'>Upcoming Travels</a></li>
                <li><a href='#contact'>Contact Me</a></li>
                <li><div id='translator'></div></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar