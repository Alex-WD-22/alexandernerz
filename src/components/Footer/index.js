import React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo aria-label="Arrow-up-move-top" to='/' onClick={toggleHome}><KeyboardDoubleArrowUpIcon sx={{ fontSize: "60px" }}/>
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://github.com/Alex-WD-22/alexandernerz' target='_blank' aria-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/alexander-nerz' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <WebsiteRights> Made with <FavoriteBorderIcon /> by Alexander Nerz © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
