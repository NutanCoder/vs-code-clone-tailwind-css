import React from "react";
import { styled } from "styled-components";

function HeroSection() {
  const HeroComponent = styled.section`
    background: linear-gradient(180deg, #ffffff 0%, #f8f8f884 100%);
    border-bottom: 1px solid #0000001f;
  `;
  return (
    <HeroComponent id="hero" className="my-16 py-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/5 w-full">
            <span className="bg-[#00000003] border rounded-2xl px-2 py-1">
              Free. Built on open source. Runs everywhere.
            </span>
            <h1 className="text-7xl font-semibold my-4 ">
              Code Editing. Redefined.
            </h1>
            <div className="mt-8">
              <a
                href="#"
                className="bg-btn-color text-white hover:bg-[#005ba4]	 px-4 py-3  text-xl rounded-md font-semibold"
              >
                Download for Windows
              </a>
            </div>
          </div>
          <div className="md:w-3/5 w-full">
            <img
              src="https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2-light.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </HeroComponent>
  );
}

export default HeroSection;
