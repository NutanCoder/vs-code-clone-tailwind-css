import React from 'react'
import './hero_section.css';

function HeroSection() {
  return (
    <section id="hero">
      <div className="container hero-spacing">
        <div className="flex item-center below-lg-flex-column gap-32">
          <div className='w-40 hero-texts'>
            <span className="chip">
              Free. Built on open source. Runs everywhere.
            </span>
            <h1>
              Code
              Editing.
              Redefined.
            </h1>
            <a href="#" className='download-os'>Download for Windows</a>
          </div>
          <div className='w-60'>
            <img src='https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2-light.png' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection