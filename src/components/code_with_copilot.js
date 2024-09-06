import React from "react";

function CodeWithCopilot() {
  return (
    <section id="copilot">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex space-between flex-col md:flex-row gap-16 mb-20">
          <div className="md:w-1/3 w-full">
            <h3 className="text-3xl font-semibold mb-4 leading-normal">
              Code with GitHub Copilot
            </h3>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                Write code faster and smarter with GitHub Copilot, your AI pair
                programmer.
              </p>
              <a
                href="#"
                className="text-[#005fb8] text-base font-medium underline"
              >
                Try GitHub Copilot free for 30 days
              </a>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  Completions
                </a>{" "}
                present suggestions automatically to help you code more
                efficiently.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  Copilot Chat
                </a>{" "}
                understands the context of your code, workspace, extensions,
                settings, and more.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  Inline Chat
                </a>{" "}
                enables you to iteratively generate edits and get answers to
                quick questions, directly on your code.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <img
              src="https://code.visualstudio.com/assets/home/swimlane-copilot-light.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeWithCopilot;
