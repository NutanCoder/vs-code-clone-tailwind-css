import React from "react";
import { styled } from "styled-components";

function Footer() {
  const FooterStyled = styled.footer`
    padding: 90px 0px;
  `;
  return (
    <FooterStyled>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between item-center">
          <div className="flex items-center gap-2">
            <a href="#">
              <img
                src="https://code.visualstudio.com/assets/icons/x-icon.svg"
                className="w-4"
              />
            </a>
            <a href="#">
              <img
                src="https://code.visualstudio.com/assets/icons/github-icon.svg"
                className="w-5"
              />
            </a>
            <a href="#">
              <img
                src="https://code.visualstudio.com/assets/icons/youtube-icon.svg"
                className="w-5"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="https://code.visualstudio.com/assets/icons/microsoft.svg"
                className="w-4"
              />
            </a>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <a href="#">Support</a>
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
          <a href="#">License</a>
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;
