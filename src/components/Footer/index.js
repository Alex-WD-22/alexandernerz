import React from 'react'
import {animateScroll as scroll} from "react-scroll"
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    WebsiteRights
    
} from "./FooterElements"

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                            <FooterLink to="/">Go to Top</FooterLink>
                            <FooterLink to="about">About</FooterLink>
                            <FooterLink to="projects">Projects</FooterLink>
                            <FooterLink to="contact">Contact</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <WebsiteRights onClick={toggleHome} to="/">Alexander Nerz © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;