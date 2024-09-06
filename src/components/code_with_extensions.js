import React from "react";
import ExtensionCard from "./extension_card";
import { styled } from "styled-components";

function CodeExtensions() {
  const ExtensionCardBox = styled.div`
    mask-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.1));
  `;
  const extensions = [
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/python-extension.png",
      title: "Python",
      description: "Adds rich language support for Python",
    },
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/copilot-extension.png",
      title: "GitHub Copilot",
      description: "Your AI pair programmer",
    },
    {
      imageurl: "https://code.visualstudio.com/assets/images/c-extension.png",
      title: "C/C++",
      description: "Adds rich language support for C/C++",
    },
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/jupyter-extension.png",
      title: "Jupyter",
      description: "Language support for Jupyter Notebooks",
    },
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/gitlens-extension.png",
      title: "GitLens",
      description: "Supercharge your Git experience",
    },
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/cs-dev-kit-extension.png",
      title: "C# Dev Kit",
      description: "Powerful tools for your C# environment",
    },
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/github-pull-requests-extension.png",
      title: "GitHub Codespaces",
      description: "Fully configured dev environments in the cloud",
    },
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/github-pull-requests-extension.png",
      title: "GitHub Pull Requests",
      description: "Collaborate on issues and pull requests",
    },
    {
      imageurl:
        "https://code.visualstudio.com/assets/images/remote-extension.png",
      title: "Remote Development",
      description: "Open folders in a container on a remote machine",
    },
  ];
  return (
    <section id="code-extensions">
      <div className="container mx-auto my-40 px-4 md:px-0">
        <div className="flex gap-12">
          <div className="w-1/3">
            <h3 className="text-3xl font-semibold mb-4">
              Code with extensions
            </h3>
            <p className="font-semibold leading-7 mb-5">
              Whether you're a beginner or an expert, we've got you covered.
              Choose from hundreds of extensions to power up your VS Code
              experience.
            </p>
            <a
              href="#"
              className="text-[#005fb8] text-base font-medium underline"
            >
              Learn more about extensions
            </a>
          </div>
          <div className="w-2/3">
            <ExtensionCardBox className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-2">
              {extensions.map((element) => {
                return <ExtensionCard extension={element} />;
              })}
            </ExtensionCardBox>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeExtensions;
