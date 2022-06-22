import React, { useState } from 'react'
import TitleSection from '../TitleSection'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import AboutSection from '../AboutSection'
import { homeObjOne, homeObjTwo } from '../AboutSection/Data'
import Projects from '../Projects'
import Footer from '../Footer'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <TitleSection />
      <AboutSection {...homeObjOne} />
      <Projects />
      <AboutSection {...homeObjTwo} />
      <Footer />
    </>
  )
}

export default Home;