import React from 'react';

const NavBar = () => {
    const scrollToElement = (elementId) => {
      document.getElementsByClassName(elementId)[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    return (
      <nav className='navbar active'>
        <div className='navbar__left'>
          AW
        </div>
        <div className='navbar__right'>
          <span className='navbar__button' onClick={() => scrollToElement('Experience')}>Experience</span>
          <span className='navbar__button' onClick={() => scrollToElement('Projects')}>Projects</span>
          <span className='navbar__button' onClick={() => scrollToElement('Techstack')}>Techstack</span>
          <span className='navbar__button' onClick={() => scrollToElement('About')}>About</span>
        </div>
      </nav>
    )
}

export default NavBar;