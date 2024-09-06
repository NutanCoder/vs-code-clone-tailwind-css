import React from "react";

function CodeAnywhere() {
  return (
    <section id="code-anywhere">
      <div className="container mx-auto px-4 md:px-0 my-16">
        <div className="flex space-between flex-col md:flex-row gap-20">
          <div className="md:w-1/3 w-full">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4 leading-normal">
                Code anywhere
              </h3>
              <p className="text-base font-medium mb-3">
                Code wherever you're most productive, whether you're connected
                to the cloud, a remote repository, or in the browser with VS
                Code for the Web (vscode.dev).
              </p>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  Built-in Source
                </a>{" "}
                Control empowers you with Git support out-of-the-box. Many other
                source control providers are available through extensions.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-base font-medium mb-3">
                <a
                  href="#"
                  className="text-[#005fb8] text-base font-medium underline"
                >
                  GitHub Codespaces
                </a>{" "}
                provides cloud-powered development environments for any activity
                - whether it's a long-term project, or a short-term task like
                reviewing a pull request.
              </p>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <img
              src="https://code.visualstudio.com/assets/home/swimlane-anywhere-light.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeAnywhere;
