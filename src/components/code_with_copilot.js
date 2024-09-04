import React from 'react';
import './code_with_copilot.css';

function CodeWithCopilot() {
  return (
    <section id="copilot">
      <div className="container">
        <div className="flex below-lg-flex-column space-between gap-32">
          <div className="w-30">
            <h3>
              Code with GitHub Copilot
            </h3>
            <div className='mb-32'>
              <p>
                Write code faster and smarter with GitHub Copilot, your AI pair programmer.
              </p>
              <a href="#">Try GitHub Copilot free for 30 days</a>
            </div>
            <div className='mb-32'>
              <p>
                <a href="#">Completions</a> present suggestions automatically to help you code more efficiently.
              </p>
            </div>
            <div className='mb-32'>
              <p>
                <a href="#">Copilot Chat</a> understands the context of your code, workspace, extensions, settings, and more.
              </p>
            </div>
            <div className='mb-32'>
              <p>
                <a href="#">Inline Chat</a> enables you to iteratively generate edits and get answers to quick questions, directly on your code.
              </p>
            </div>
          </div>
          <div className="w-60">
            <img src="https://code.visualstudio.com/assets/home/swimlane-copilot-light.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeWithCopilot;