import React from 'react';
import './fully_customized.scss';

function CodeFullyCustomized() {
  return (
    <section id="code-fully">
      <div className="container">
        <div className="flex space-between below-lg-flex-column">
          <div className="w-30">
            <div className='mb-32'>
              <h3>
                Code fully customized
              </h3>
              <p>
                Customize your VS Code UI and layout so that it fits your coding style.
              </p>
            </div>
            <div className='mb-32'>
              <p>
                <a href="#">Color themes</a> let you modify the colors in VS Code's user interface to suit your preferences and work environment.
              </p>
            </div>
            <div className='mb-32'>
              <p>
                <a href="#">Settings Sync</a> enables you to share your user settings across your VS Code instances with the Settings Sync feature.
              </p>
            </div>
            <div className='mb-32'>
              <p>
                <a href="#">Profiles</a> let you create sets of customizations and quickly switch between them or share them with others.
              </p>
            </div>
          </div>
          <div className="w-60">
            <img src="https://code.visualstudio.com/assets/home/swimlane-customized-light.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeFullyCustomized;