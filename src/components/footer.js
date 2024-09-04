import React from 'react'
import { styled } from 'styled-components';
import './footer.scss';

function Footer() {
  const FooterStyled = styled.footer`
    padding:90px 0px;
  `;
  return (
    <FooterStyled>
      <div className="container">
        <div className="flex space-between item-center">
          <div className='flex item-center'>
            <a href="#">
              <img src="https://code.visualstudio.com/assets/icons/x-icon.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://code.visualstudio.com/assets/icons/github-icon.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://code.visualstudio.com/assets/icons/youtube-icon.svg" alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="https://code.visualstudio.com/assets/icons/microsoft.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="flex footer-links">
          <a href="#">Support</a>
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
          <a href="#">License</a>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer;