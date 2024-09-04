import React from 'react';
import './code_anywhere.scss';

function CodeAnywhere() {
  return (
    <section id="code-anywhere">
      <div className="container">
        <div className="flex space-between below-lg-flex-column">
          <div className="w-30">
            <div className="mb-32">
              <h3>
                Code anywhere
              </h3>
              <p>
                Code wherever you're most productive, whether you're connected to the cloud, a remote repository, or in the browser with VS Code for the Web (vscode.dev).
              </p>
            </div>
            <div className="mb-32">
              <p>
                <a href="#">Built-in Source</a> Control empowers you with Git support out-of-the-box. Many other source control providers are available through extensions.
              </p>
            </div>
            <div className="mb-32">
              <p>
                <a href="#">GitHub Codespaces</a> provides cloud-powered development environments for any activity - whether it's a long-term project, or a short-term task like reviewing a pull request.
              </p>
            </div>
          </div>
          <div className="w-60">
            <img src="https://code.visualstudio.com/assets/home/swimlane-anywhere-light.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeAnywhere;