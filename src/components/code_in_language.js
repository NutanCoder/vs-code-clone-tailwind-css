import React from "react";
import LanguageItem from "./language_item";

function CodeInLanguage() {
  const languages = [
    {
      name: "JavaScript",
      image: "https://code.visualstudio.com/assets/home/language-js.png",
    },
    {
      name: "TypeScript",
      image: "https://code.visualstudio.com/assets/home/language-ts.png",
    },
    {
      name: "Python",
      image: "https://code.visualstudio.com/assets/home/language-python.png",
    },
    {
      name: "C#",
      image: "https://code.visualstudio.com/assets/home/language-cs.png",
    },
    {
      name: "C++",
      image: "https://code.visualstudio.com/assets/home/language-cpp.png",
    },
    {
      name: "HTML",
      image: "https://code.visualstudio.com/assets/home/language-html.png",
    },
    {
      name: "Java",
      image: "https://code.visualstudio.com/assets/home/language-java.png",
    },
    {
      name: "Json",
      image: "https://code.visualstudio.com/assets/home/language-json.png",
    },
    {
      name: "PHP",
      image: "https://code.visualstudio.com/assets/home/language-php.png",
    },
    {
      name: "Markdown",
      image: "https://code.visualstudio.com/assets/home/language-markdown.png",
    },
    {
      name: "Powershell",
      image:
        "https://code.visualstudio.com/assets/home/language-powershell.png",
    },
    {
      name: "YAML",
      image: "https://code.visualstudio.com/assets/home/language-yaml.png",
    },
  ];
  return (
    <section id="code-lang">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 w-full" id="code-lang-text">
            <h3 className="text-3xl font-semibold mb-4">
              Code in any language
            </h3>
            <p className="font-semibold leading-7">
              VS Code supports almost every major programming language. Several
              ship in the box, like JavaScript, TypeScript, CSS, and HTML, but
              extensions for others can be found in the VS Code Marketplace.
            </p>
          </div>
          <div className="md:w-2/3 w-full">
            <div className="flex flex-wrap">
              {languages.map((element) => {
                return <LanguageItem language={element} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeInLanguage;
