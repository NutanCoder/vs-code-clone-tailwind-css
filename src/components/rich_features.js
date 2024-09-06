import React from "react";

function CodeWithRichFeatures() {
  const features = [
    {
      title: "Integrated terminal",
      description:
        "Use your favorite shell whether it's zsh, pwsh, or git bash, all inside the editor.",
      image: "https://code.visualstudio.com/assets/icons/codicon-terminal.svg",
    },
    {
      title: "Run code",
      description: "Run and debug your code without leaving your editor.",
      image: "https://code.visualstudio.com/assets/icons/codicon-debug.svg",
    },
    {
      title: "Version control",
      description:
        "Built-in support for git and many other source control providers.",
      image:
        "https://code.visualstudio.com/assets/icons/codicon-version-control.svg",
    },
    {
      title: "Build tasks",
      description: "Run tools and analyze their results from within VS Code.",
      image:
        "https://code.visualstudio.com/assets/icons/codicon-build-tasks.svg",
    },
    {
      title: "Local history",
      description:
        "Never lose your changes with automatically tracked local history.",
      image:
        "https://code.visualstudio.com/assets/icons/codicon-local-history.svg",
    },
    {
      title: "Themes",
      description:
        "Your theme is an extension of your personality. Add some flair to your editor and add your touch.",
      image: "https://code.visualstudio.com/assets/icons/codicon-themes.svg",
    },
    {
      title: "Accessibility",
      description:
        "Optimized experience for screen readers, high contrast themes, and keyboard-only navigation.",
      image:
        "https://code.visualstudio.com/assets/icons/codicon-accessibility.svg",
    },
    {
      title: "Web support",
      description:
        "Whether you are on your phone, tablet, or desktop, you can access your code from anywhere.",
      image: "https://code.visualstudio.com/assets/icons/codicon-web.svg",
    },
  ];
  return (
    <section id="rich-features">
      <div className="container mx-auto px-4 md:px-0 my-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4 leading-normal">
            Code with rich features
          </h3>
          <p className="text-base font-medium mb-3">
            There's a lot more to an editor. Whether it's using built-in
            features or <br />
            rich extensions, there's something for everyone.
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-cols-4 grid-cols-2 gap-4">
          {features.map((element) => {
            return (
              <div className="border p-4 rounded-xl bg-[#00000003] border-[#0000001a]">
                <img
                  src={element.image}
                  className="h-8 w-8 p-2 bg-[#0000000a] mb-3 rounded-lg"
                />
                <h4 className="text-base font-semibold mb-2">
                  {element.title}
                </h4>
                <p className="text-sm font-normal mb-3">
                  {element.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CodeWithRichFeatures;
