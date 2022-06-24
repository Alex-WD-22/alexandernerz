import React, {useState} from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { homeObjOne,} from '../components/About/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import About from "../components/About";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Intro />
      <About {...homeObjOne}/>
      <Projects />
      <Contact />
      <Footer />
      
    </>
  )
}

export default Home
