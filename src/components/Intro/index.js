
import { IntroContainer, IntroContent, IntroH1, IntroP, IntroH2,} from './IntroElements'
import { motion } from "framer-motion"
import React from 'react';

const Intro = () => {

  return (
    <IntroContainer id='Intro' className='gradient'>
      <IntroContent>
        <IntroH2>Hi, I'm <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 1 }}>
          <IntroH1 id='name'>Alex<motion.div
            animate={{ x: [300, 0] }}
            transition={{ duration: 1.2 }}>
            <IntroP>Full Stack Developer</IntroP>
          </motion.div></IntroH1>
        </motion.div></IntroH2>
      </IntroContent>
    </IntroContainer>
  )
}

export default Intro;
