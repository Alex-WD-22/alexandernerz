import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
    NavBtn, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavBarElements'
import {animateScroll as scroll} from 'react-scroll'


const NavBar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogo to="/about" onClick={toggleHome}>Alexander Nerz</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects"
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact='true' 
                          offset={-80}
                        >Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="homeObjTwo"
                          smooth={true} 
                          duration={500} 
                          spy={true} 
                          exact='true' 
                          offset={-80}
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn />
            </NavBarContainer>
        </Nav>
        </>
    )
}
export default NavBar;