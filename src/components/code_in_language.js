import React from 'react'
import "./code_in_language.css";
import LanguageItem from './language_item';

function CodeInLanguage() {
  const languages = [
    {
      name: 'JavaScript',
      image: 'https://code.visualstudio.com/assets/home/language-js.png',
    },
    {
      name: 'TypeScript',
      image: 'https://code.visualstudio.com/assets/home/language-ts.png',
    },
    {
      name: 'Python',
      image: 'https://code.visualstudio.com/assets/home/language-python.png',
    },
    {
      name: 'C#',
      image: 'https://code.visualstudio.com/assets/home/language-cs.png',
    },
    {
      name: 'C++',
      image: 'https://code.visualstudio.com/assets/home/language-cpp.png',
    },
    {
      name: 'HTML',
      image: 'https://code.visualstudio.com/assets/home/language-html.png',
    },
    {
      name: 'Java',
      image: 'https://code.visualstudio.com/assets/home/language-java.png',
    },
    {
      name: 'Json',
      image: 'https://code.visualstudio.com/assets/home/language-json.png',
    },
    {
      name: 'PHP',
      image: 'https://code.visualstudio.com/assets/home/language-php.png',
    },
    {
      name: 'Markdown',
      image: 'https://code.visualstudio.com/assets/home/language-markdown.png',
    },
    {
      name: 'Powershell',
      image: 'https://code.visualstudio.com/assets/home/language-powershell.png',
    },
    {
      name: 'YAML',
      image: 'https://code.visualstudio.com/assets/home/language-yaml.png',
    },
  ];
  return (
    <section id='code-lang'>
      <div className="container">
        <div className="flex gap-32 below-lg-flex-column ">
          <div className="w-30" id='code-lang-text'>
            <h3>Code in any language</h3>
            <p>VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.</p>
          </div>
          <div className="w-70">
            <div className="flex flex-wrap">
              {
                languages.map((element) => {
                  return <LanguageItem language={element} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeInLanguage