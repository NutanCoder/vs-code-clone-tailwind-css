import React from "react";

function CodeFullyCustomized() {
  return (
    <section id="code-fully">
      <div className="custom-container">
        <div className="flex space-between flex-col md:flex-row gap-20">
          <div className="md:w-1/3 w-full">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4 leading-normal">
                Code fully customized
              </h3>
              <p className="text-base font-medium mb-3">
                Customize your VS Code UI and layout so that it fits your coding
                style.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  Color themes
                </a>{" "}
                let you modify the colors in VS Code's user interface to suit
                your preferences and work environment.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  Settings Sync
                </a>{" "}
                enables you to share your user settings across your VS Code
                instances with the Settings Sync feature.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  Profiles
                </a>{" "}
                let you create sets of customizations and quickly switch between
                them or share them with others.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <img
              src="https://code.visualstudio.com/assets/home/swimlane-customized-light.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeFullyCustomized;
