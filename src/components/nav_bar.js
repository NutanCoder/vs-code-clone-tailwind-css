import React, { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="container h-100 nav-height">
        <div className="flex space-between item-center h-100">
          <div className='flex'>
            <a href='#' className='logo'>Visual Studio Code</a>
            <ul className='nav-items flex item-center'>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Extensions</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <a href="#" className='download-btn'>Download</a>
            <button className='nav-mobile-button' onClick={handleNav}>
              {isOpen ? 'x' : '='}
            </button>
          </div>
        </div>
      </div>
      <ul className='mobile-nav-items flex flex-column'
        style={{
          display: isOpen ? 'block' : 'none'
        }}
      >
        <li><a href="#">Docs</a></li>
        <li><a href="#">Updates</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">Extensions</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </nav>
  )
}

export default NavBar