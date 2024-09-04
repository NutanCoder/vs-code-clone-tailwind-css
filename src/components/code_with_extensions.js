import React from 'react'
import "./code_with_extensions.css";
import ExtensionCard from './extension_card';

function CodeExtensions() {
  const extensions = [
    {
      "imageurl": "https://code.visualstudio.com/assets/images/python-extension.png",
      "title": "Python",
      "description": "Adds rich language support for Python"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/copilot-extension.png",
      "title": "GitHub Copilot",
      "description": "Your AI pair programmer"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/c-extension.png",
      "title": "C/C++",
      "description": "Adds rich language support for C/C++"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/jupyter-extension.png",
      "title": "Jupyter",
      "description": "Language support for Jupyter Notebooks"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/gitlens-extension.png",
      "title": "GitLens",
      "description": "Supercharge your Git experience"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/cs-dev-kit-extension.png",
      "title": "C# Dev Kit",
      "description": "Powerful tools for your C# environment"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/github-pull-requests-extension.png",
      "title": "GitHub Codespaces",
      "description": "Fully configured dev environments in the cloud"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/github-pull-requests-extension.png",
      "title": "GitHub Pull Requests",
      "description": "Collaborate on issues and pull requests"
    },
    {
      "imageurl": "https://code.visualstudio.com/assets/images/remote-extension.png",
      "title": "Remote Development",
      "description": "Open folders in a container on a remote machine"
    }
  ];
  return (
    <section id='code-extensions'>
      <div className="container">
        <div className="flex below-lg-flex-column">
          <div className="w-30">
            <h3>Code with extensions</h3>
            <p>Whether you're a beginner or an expert, we've got you covered. Choose from hundreds of extensions to power up your VS Code experience.</p>
            <a href="#">Learn more about extensions</a>
          </div>
          <div className="w-70">
            <div className="flex flex-wrap gap-8 extension-cards">
              {
                extensions.map((element) => {
                  return <ExtensionCard extension={element} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeExtensions