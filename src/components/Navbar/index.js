import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, Img } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import Logo3 from "../../images/LogoWhite.png"
import { motion } from "framer-motion"

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
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
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <motion.div
              animate={{ y: [-200, 6] }}
              transition={{ duration: 2 }}>
              <NavLogo to='/' onClick={toggleHome}>
                <Img src={Logo3} />
              </NavLogo>
            </motion.div>
            <motion.div
              animate={{ y: [-200, 6] }}
              transition={{ duration: 2 }}>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
            </motion.div>
            <NavMenu>
              <NavItem>
                <motion.div
                  animate={{ y: [-200, 30] }}
                  transition={{ duration: 2 }}>
                  <NavLinks to='about' className='underline-hover'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  >About</NavLinks>
                </motion.div>
              </NavItem>
              <NavItem>
                <motion.div
                  animate={{ y: [-200, 30] }}
                  transition={{ duration: 2 }}>
                  <NavLinks to='projects' className='underline-hover'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  >Projects</NavLinks>
                </motion.div>
              </NavItem>
              <NavItem>
                <motion.div
                  animate={{ y: [-200, 30] }}
                  transition={{ duration: 2 }}>
                  <NavLinks to='contact' className='underline-hover'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  >Contact</NavLinks>
                </motion.div>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;

