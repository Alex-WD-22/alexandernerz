import React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, Img } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import Logo from "../../images/34-code-solid.png"



const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
          
            <SocialLogo to='/' onClick={toggleHome}>
            <Img src={Logo}></Img>
            </SocialLogo>
            <WebsiteRights> Alexander Nerz © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://github.com/Alex-WD-22/alexandernerz' target='_blank' arial-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/alexander-nerz' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
